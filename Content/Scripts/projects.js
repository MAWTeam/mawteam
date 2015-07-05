$("#projects").on("click", ".button:first-child", function () {
    $("#more-info-wedge h1").text($(this).closest("article").find("h1").text());
    $("#more-info-wedge p").text($(this).closest("article").find("p").text());
    $("#more-info-wedge .timeline").text($(this).closest("article").attr("data-timeline"));
    wedge.show("#more-info-wedge", { "opacity": 0.7 });
});