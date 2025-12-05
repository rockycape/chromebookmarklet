(function () {
    var msg = "Hello from your new Bookmarklet!";
    var div = document.createElement("div");
    div.style.position = "fixed";
    div.style.top = "20px";
    div.style.left = "50%";
    div.style.transform = "translateX(-50%)";
    div.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    div.style.color = "white";
    div.style.padding = "10px 20px";
    div.style.borderRadius = "5px";
    div.style.zIndex = "10000";
    div.style.fontFamily = "sans-serif";
    div.style.fontSize = "14px";
    div.textContent = msg;
    document.body.appendChild(div);
    setTimeout(function () {
        document.body.removeChild(div);
    }, 3000);
})();
