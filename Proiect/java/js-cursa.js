window.onload = function () {

    // Initialize the platform object:
    var platform = new H.service.Platform({
        'apikey': 'otISUbRheykNpmTzcC0VLl8Qf3ZVnS2towf457E4qio'
    });

    var defaultLayers = platform.createDefaultLayers();

    // Instantiate the map:
    var map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.vector.normal.map,
        {
            zoom: 10,
            center: { lat: 44.435247, lng: 26.101750 }
        });







    var routingParameters = {
        // The routing mode:
        'mode': 'fastest;car',
        // The start point of the route:
        'waypoint0': 'geo!44.435247,26.101750',
        // The end point of the route:
        'waypoint1': 'geo!44.862596,24.888425',
        // To retrieve the shape of the route we choose the route
        // representation mode 'display'
        'representation': 'display'
    };

    // Define a callback function to process the routing response:
    var onResult = function (result) {
        var route,
            routeShape,
            startPoint,
            endPoint,
            linestring;
        if (result.response.route) {
            // Pick the first route from the response:
            route = result.response.route[0];
            // Pick the route's shape:
            routeShape = route.shape;

            // Create a linestring to use as a point source for the route line
            linestring = new H.geo.LineString();

            // Push all the points in the shape into the linestring:
            routeShape.forEach(function (point) {
                var parts = point.split(',');
                linestring.pushLatLngAlt(parts[0], parts[1]);
            });

            // Retrieve the mapped positions of the requested waypoints:
            startPoint = route.waypoint[0].mappedPosition;
            endPoint = route.waypoint[1].mappedPosition;

            // Create a polyline to display the route:
            var routeLine = new H.map.Polyline(linestring, {
                style: { strokeColor: 'blue', lineWidth: 3 }
            });

            // Create a marker for the start point:
            var startMarker = new H.map.Marker({
                lat: startPoint.latitude,
                lng: startPoint.longitude
            });

            // Create a marker for the end point:
            var endMarker = new H.map.Marker({
                lat: endPoint.latitude,
                lng: endPoint.longitude
            });

            // Add the route polyline and the two markers to the map:
            map.addObjects([routeLine, startMarker, endMarker]);

            // Set the map's viewport to make the whole route visible:
            map.getViewModel().setLookAtData({ bounds: routeLine.getBoundingBox() });
        }
    };

    // Get an instance of the routing service:
    var router = platform.getRoutingService();

    // Call calculateRoute() with the routing parameters,
    // the callback and an error callback function (called if a
    // communication error occurs):
    router.calculateRoute(routingParameters, onResult,
        function (error) {
            alert(error.message);
        });












    // Create a group that can hold map objects:
    group = new H.map.Group();

    // Add the group to the map object (created earlier):
    map.addObject(group);

    // Create a marker:
    marker = new H.map.Marker(map.getCenter());

    // Add the marker to the group (which causes 
    // it to be displayed on the map)
    group.addObject(marker);



    // var svgMarkup = '<svg width="24" height="24" ' +
    //     'xmlns="http://www.w3.org/2000/svg">' +
    //     '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
    //     'height="22" /><text x="12" y="18" font-size="12pt" ' +
    //     'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
    //     'fill="white">H</text></svg>';




    // // Create a marker icon from an image URL:
    // var icon = new H.map.Icon(svgMarkup);

    // // Create a marker using the previously instantiated icon:
    // var marker = new H.map.Marker({ lat: 44.4, lng: 26.1 }, { icon: icon });

    // // Add the marker to the map:
    // map.addObject(marker);







    var mapEvents = new H.mapevents.MapEvents(map);

    // Add event listeners:
    map.addEventListener('tap', function (evt) {
        // Log 'tap' and 'mouse' events:
        console.log(evt.type, evt.currentPointer.type);
    });

    // Instantiate the default behavior, providing the mapEvents object:
    var behavior = new H.mapevents.Behavior(mapEvents);







    // Create the default UI:
    var ui = H.ui.UI.createDefault(map, defaultLayers, 'en-US');


    var mapSettings = ui.getControl('mapsettings');
    var zoom = ui.getControl('zoom');
    var scalebar = ui.getControl('scalebar');

    mapSettings.setAlignment('botom-right');
    zoom.setAlignment('botom-right');
    scalebar.setAlignment('top-left');

    // // Create an info bubble object at a specific geographic location:
    // var bubble = new H.ui.InfoBubble({ lng: 26.1, lat: 44.4 }, {
    //     content: '<b>Hello World!</b>'
    // });

    // // Add info bubble to the UI:
    // ui.addBubble(bubble);




    // Create the parameters for the reverse geocoding request:
    var reverseGeocodingParameters = {
        prox: '44.435615,26.100720,150',
        mode: 'retrieveAddresses',
        maxresults: 1
    };

    // Define a callback function to process the response:
    function onSuccess(result) {
        var location = result.Response.View[0].Result[0];

        // Create an InfoBubble at the returned location with
        // the address as its contents:
        ui.addBubble(new H.ui.InfoBubble({
            lat: location.Location.DisplayPosition.Latitude,
            lng: location.Location.DisplayPosition.Longitude
        }, { content: location.Location.Address.Label }));
    };

    // Get an instance of the geocoding service:
    var geocoder = platform.getGeocodingService();

    // Call the geocode method with the geocoding parameters,
    // the callback and an error callback function (called if a
    // communication error occurs):
    geocoder.reverseGeocode(
        reverseGeocodingParameters,
        onSuccess,
        function (e) { alert(e); });





    var d = new Date();
    var n = d.getFullYear();

    var footer = document.querySelector('#footer');
    var p = footer.children[0].textContent;
    var np = p + n;
    
    footer.children[0].innerHTML = np;

}