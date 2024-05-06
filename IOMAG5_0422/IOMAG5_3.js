$(document).ready(function(){

    $("#addText").click(function(){
        $("#moving").append("Programtervező informatikus");
    });

    $("#changeBtn").click(function(){
        $("#changeBtn").prepend("PTI ");
    });

    $("#addBtn").click(function(){
        $("body").append($("<button id='me'>ME GEIK-PTI</button>"));
    });

    $("#addHeader").click(function(){
        $("body").prepend($("<h1>jQuery feladat</h1>"));
    });

    $("#addSubT").click(function(){
        $("h1").after($("<h2>HTML metódusok</h2>"));
    });

    $("#addFormT").click(function(){
        $("form").before($("<h2>ŰRLAP-IOMAG5</h2>"));
    });
});