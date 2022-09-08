var header = document.getElementById("parent");
var btns = header.getElementsByClassName("btns");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function myfun () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        // current.className = el.className === 'active' ? 'inactive' : 'active';
    })
};

