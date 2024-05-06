$(document).ready(function(){

    $("#toText").click(function () {
        alert($("#moving").text());
    });

    $("#toHTML").click(function () {
        alert($("#moving").html());
    });

    $("#toValue").click(function () {
        if ($("#name").val()=="")
            alert("Jelenkezés");
        else
            alert($("#name").val());
    });

    $("#toAttributes").click(function () {
        alert($("#toAttributes").attr("value"));
    })
});