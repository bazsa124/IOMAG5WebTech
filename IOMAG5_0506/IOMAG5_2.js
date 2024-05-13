var _data;
var _box=$("#box");
$( document ).ready(function() {
    $.getJSON("./CSB_orarend.json", function(data){_data=data;});
    $("#toLoad").click( function() {
        _box.text("");
        _box.html("<h2>Miskolci Egyetem</h2>");
        _box.append("<p>Cím: "+ _data[0].address.postal_code+ 
        " " +_data[0].address.city+ 
        " " +_data[0].address.street+
        "</p>");

        _box.append("<h2>Telefonszámok:</h2>");
        _box.append(`
            <ul>
                <li>${_data[0].phone_numbers[0].type}: ${_data[0].phone_numbers[0].number}</li>
                <li>${_data[0].phone_numbers[1].type}: ${_data[0].phone_numbers[1].number}</li>
            </ul>
        `);
        
        _box.append("<h2>Órarend 2024 tavasz</h2>");
        for( var i=0;i<_data.length;i++)
            fillDetails(i);
        
    });
});

function fillDetails(i){
    _box.append("<h3> Kurzusnév: " + _data[i].course_name + "</h3>");
        _box.append("<h3> Oktató: " + _data[i].oktato +    "</h3>");
        _box.append("<h3> Szak: " + _data[i].szak +      "</h3>");
    
        _box.append("<ul> <li> Nap: "
            + _data[i].time.day + 
            " </li> <li> Tól: "
            + _data[i].time.from + 
            " </li> <li> Ig: "
            + _data[i].time.to +
        " </li> </ul>");

        _box.append("<b>Helyszín: </b>" + _data[i].place);
        _box.append("<br><p>----------------------</p><br>");
}