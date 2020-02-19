window.onload = function()
{
    var d = new Date();
    var n = d.getFullYear();

    var footer = document.querySelector('#footer');
    var p = footer.children[0].textContent;
    var np = p + n;
    
    footer.children[0].innerHTML = np;
}