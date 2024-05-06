$(document).ready(function(){
    $("#toCount").click(function() {
        var a = parseInt($("#valueA").val());
        var b = parseInt($("#valueB").val());
        
        var op = $("input[name='muvelet']:checked").val();

        var result=0;
        if($("#valueA").val()!="" && $("#valueB").val()!="")
            switch (op) {
                case 'meg':
                    result = a + b;
                    break;
                case 'kivon':
                    result = a - b;
                    break;
                case 'szor':
                    result = a * b;
                    break;
                case 'oszt':
                    if( $("#valueB").val()!='0')
                        result = a / b;
                    else
                        alert("0-val való osztás nem lehetséges.");
                    break;
            }
        else
            alert("írj be számokat a mezőkbe!");

        $("#result").text("Eredmény: " + result);
    });
});