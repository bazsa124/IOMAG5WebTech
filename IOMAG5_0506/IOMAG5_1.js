var _data;
$( document ).ready(function() {
    $.getJSON("./CSB_orarend1obj.json", function(data){_data=data;});
    $("#toLoad").click( function() {
        var _box=$("#box");
        _box.text("");
        _box.html("<h2>Miskolci Egyetem</h2>");
        _box.append("<p>Cím: "+ _data.address.postal_code+ 
        " " +_data.address.city+ 
        " " +_data.address.street+
        "</p>");

        _box.append("<h2>Telefonszámok:</h2>");
        _box.append(`
            <ul>
                <li>${_data.phone_numbers[0].type}: ${_data.phone_numbers[0].number}</li>
                <li>${_data.phone_numbers[1].type}: ${_data.phone_numbers[1].number}</li>
            </ul>
        `);
        
        _box.append("<h2>Órarend 2024 tavasz</h2>");

        _box.append("<h3> Kurzusnév: " + _data.course_name + "</h3>");
        _box.append("<h3> Oktató: " + _data.oktato +    "</h3>");
        _box.append("<h3> Szak: " + _data.szak +      "</h3>");
    
        _box.append("<ul> <li> Nap: "
            + _data.time.day + 
            " </li> <li> Tól: "
            + _data.time.from + 
            " </li> <li> Ig: "
            + _data.time.to +
        " </li> </ul>");

        _box.append("<b>Helyszín: </b>" + _data.place);
        _box.append("<br><br>");
    });
});