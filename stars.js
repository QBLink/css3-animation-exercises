$(document).ready(function() {
    $("#likestar").click(function() {
        $("#likestar").css("animation", "likeani 2s none");
        $("#likestar g").css("animation", "likeanicolor 0.5s both");
    });
    $("#lightstar").click(function() {
        $("#lightstar g").css("animation", "likeanicolor 1s both");
        $("#lightstar").css({ "animation": "light 2s both" });
    });
    $("#catchstar").hover(function() {
        var minus1 = Math.pow(-1, parseInt(Math.random() * 10, 10));
        var minus2 = Math.pow(-1, parseInt(Math.random() * 10, 10));
        var top = parseInt(Math.random() * 450 * minus1, 10) + 1 + "px";
        var left = parseInt(Math.random() * 750 * minus2, 10) + 1 + "px";
        var r = Math.floor(Math.random() * 255) + ",";
        var g = Math.floor(Math.random() * 255) + ",";
        var b = Math.floor(Math.random() * 255) + ")";
        var color = "rgb(" + r + g + b;
        $("#catchstar").css({ "top": top, "left": left });
        $("#catchstar g").attr("fill", color);
    });
    $("#shakestar").click(function() {
        $("#shakestar").css("animation", "shaking 0.2s infinite both");
        $("#colorpad").css("animation", "coloring 5s both");
    });
    $("#followstar").click(function() {
        $("#followstar g").attr("fill", "#ffc107")
        $(window).on("mousemove", function(ev) {
            $("#followstar").css("position", "absolute");
            var x = parseFloat(ev.clientX) + "px";
            var y = parseFloat(ev.clientY + document.documentElement.scrollTop) + "px";
            $("#followstar").css({ "left": x, "top": y });
        });
    });

});