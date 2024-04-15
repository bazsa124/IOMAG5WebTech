$(document).ready(function() {     
    $("#pop_up").hide();    

    $("h1").mouseleave(function(event) {
        alert(`ELhagytad a címsort.`);
    });

    $("#katt").click(function() {
        $(".hide_1").hide();
    });

    $("#katt2").dblclick(function() {
        $(".hide_2").hide();
    });

    $("form").submit(function(event) {
        event.preventDefault();
        alert("Form elküldve");
    });

    $("#btn").mouseenter(function() {
        $("#pop_up").show();
    });

    $("#btn").mouseleave(function() {
        $("#pop_up").hide();
    });

    $("input").mouseenter(function() {
        $(this).css("border", "1px solid blue");
    });

    $("input").mouseleave(function() {
        $(this).css("border", "");
    });

    $("input").focus(function() {
        $(this).css("background-color", "lightblue");
    });

    $("input").blur(function() {
        $(this).css("background-color", "");
    });
});