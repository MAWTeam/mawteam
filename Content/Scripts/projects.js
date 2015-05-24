$("#projects .info .button").click(function () {
    var article = $(this).closest("article");
    
    $("#more-info-wedge h1").text(article.find("h1").text());
    $("#more-info-wedge p").text(article.find("p").text());
    
    wedge.show("#more-info-wedge");
});