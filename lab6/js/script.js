$(document).ready(function () {

    $("#button1").click(function () {
        $(".class1").addClass("class1after");
        $("img[id='id2']").animate({width:"400px"},1000);
        // $("img").filter(function () {
        //     return $(this).attr("id") === "id2";
        //     }).animate({width:"400px"},1000);
    });

    $("#button2").click(function () {
        $(".class2, #button1, img[id='id1']").animate({opacity: '0%'}, 1000);
        // $("img").filter(function () {
        //     return $(this).attr("id") === "id1";
        // }).animate({opacity: '0%'}, 1000);
        //$("#button1").animate({opacity: '0%'}, 1000);
    });
});