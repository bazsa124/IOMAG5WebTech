$(document).ready(function(){
    $("#gomb1").click(function(){
            $(".first").toggle();
            $("a").toggle();
    });

    $("#gomb2").click(function(){
            $(".first").toggle();
            $("a").toggle();
            $(this).toggle();
    });
    $("#gomb3").click(function(){
            $(".first").toggle();
            $("a").toggle();
            $("header").toggle();
    });

      $("#gomb4").click(() => {
          $("ul>li").first().toggle();
          $("ul#lista2>li").first().toggle();
          $("p#link").toggle();
      });

      $("#gomb5").click(() => {
          $("ul>li").first().toggle();
          $("ul#lista2>li").first().toggle();
          $("a").toggle();
          $("tr").filter(":odd").toggle();
      });
    });