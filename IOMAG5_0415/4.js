$(document).ready(function(){

    $("#toHide").click(function(){$(".hide").hide();});
    $("#toShow").click(function(){$(".hide").show();});
    $("#toToggle").click(function(){$(".hide").toggle();});

    $("#toHideForm").click(function(){$("form").hide();});
    $("#toShowForm").click(function(){$("form").show();});
    $("#toToggleForm").click(function(){$("form").toggle();});

    $("#o_1").click(function(){$("form").css("opacity","0.1");});
    $("#o_2").click(function(){$("form").css("opacity","0.5");});
    $("#o_3").click(function(){$("form").css("opacity","0.8");});
});