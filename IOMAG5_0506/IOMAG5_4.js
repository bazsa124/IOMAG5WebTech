$(document).ready(function(){
    $("#gomb1").click(function(){
            $(".hiding").toggle( 'clip', '', 2000);
            $(".first").toggle( 'bounce', '', 2000);
            $("a").toggle( 'explode', '', 2000);
    });

    $("#gomb2").click(function(){
            $(".first").toggle( 'blind', '', 2000);
            $("a").toggle( 'drop', '', 2000);
            $(this).toggle( 'fade', '', 2000);
    });
    $("#gomb3").click(function(){
             $(".first").toggle( 'fold', '', 2000);
            $("a").toggle( 'highlight', '', 2000);
            $("header").toggle( 'puff', '', 2000);
    });

      $("#gomb4").click(() => {
          $("ul>li").first().toggle( 'fold', '', 2000);
          $("ul#lista2>li").first().toggle( 'blind', '', 2000);
          $("p#link").toggle( 'clip', '', 2000);
      });

      $("#gomb5").click(() => {
          $("ul>li").first().toggle( 'highlight', '', 2000);
          $("ul#lista2>li").first().toggle( 'explode', '', 2000);
          $("a").toggle( 'bounce', '', 2000);
          $("tr").filter(":odd").toggle( 'highlight', '', 2000);
      });

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