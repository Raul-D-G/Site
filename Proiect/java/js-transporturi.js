window.onload = function () {


    const a = document.getElementById('a');
    a.onclick = function () {
        var d = new Date();
        localStorage.setItem("json", JSON.stringify({ data: d, adresa: a.href }));
    }

    a.onmouseover = function () {
        l = localStorage.getItem("json");
        if (l != null) {
            ojs = JSON.parse(l);
            console.log(ojs.data);
        }
    }


    var d = new Date();
    var n = d.getFullYear();

    var footer = document.querySelector('#footer');
    var p = footer.children[0].textContent;
    var np = p + n;

    footer.children[0].innerHTML = np;
}