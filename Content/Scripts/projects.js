$("#projects").on("click", ".button:first-child", function () {
    $("#more-info-wedge h1").text($(this).closest("article").find("h1").text());
    $("#more-info-wedge p").text($(this).closest("article").find("p.long").text());
    $("#more-info-wedge .timeline").text($(this).closest("article").attr("data-timeline"));

    $("#more-info-wedge .color").remove();
    var colors = $(this).closest("article").attr("data-colors").split(",");
    for (var c = 0; c < colors.length; c++) {
        var color = colors[c].trim();
        $("#more-info-wedge .colors").append($("<span></span>", { "class": "color" }).css("background-color", color));
    }

    wedge.show("#more-info-wedge", { "opacity": 0.7 });
});