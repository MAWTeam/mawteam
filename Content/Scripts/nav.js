document.getElementById("hamburger").onclick = function () {
    var body = document.getElementsByTagName("body")[0];
    if (body.className === "nav-opened") {
        body.className = "";
    } else {
        body.className = "nav-opened";
    }
};