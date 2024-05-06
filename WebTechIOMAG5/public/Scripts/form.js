var selected;
            var dogs_data;
            var pic;
            function load(){
                pic=document.getElementById("dog_pic");
                document.getElementById("home_icons").addEventListener('click',function(){window.open('index.html',"_self")});
                document.getElementById("list_icons").addEventListener('click',function(){window.open('list.html',"_self")});
                document.getElementById("form_icons").addEventListener('click',function(){window.open('form.html',"_self")});
                document.getElementById("video_icons").addEventListener('click',function(){window.open('video.html',"_self")});
                document.getElementById("game").addEventListener('click',function(){window.open('memory_game.html',"_self")});
                document.getElementById("clear").addEventListener('click',function(){clearInformation();document.getElementById("dogs").value = '';});
                document.getElementById("chb_others").addEventListener("change", function() {addArea()});
                
                function addArea(){
                    var textInputContainer = document.getElementById("others_input");
                    if (document.getElementById("chb_others").checked) {
                        var input = document.createElement("textarea");
                        input.id="otherInput";
                        input.placeholder = "Egyéb";
                        input.rows=2;
                        input.maxLength="50";
                        input.style.resize="none";
                        textInputContainer.appendChild(input);
                    } else {
                        textInputContainer.innerHTML = ""; // Remove all child elements
                    }
                }
                $(document).ready(function(){

                    $("#dogs").change(function(){
                        $("#dog_pic").show();
                        selected= this.value;
                        clearInformation();
                        addInformation();
                     });
                    $("#dogs").click(function(){
                        document.getElementById("dogs").value = '';
                        clearInformation();
                    });
                });
                
                loadJSON();
            }
            
        function loadJSON(){
            fetch("../JSONs/adopt.json")
            .then(function(response) {
                // Check if the request was successful
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                // Parse the JSON response
                return response.json();
            })
            .then(function(data) {
                // Use the data as needed
                dogs_data=data;
                for(var i=0;i<data.length;i++)
                {
                    var temp=document.createElement('option');
                    temp.innerText=data[i].breed;
                    temp.value=data[i].name;
                    $("#available_dogs").append(temp);
                }
            })
            .catch(function(error) {
                // Handle errors
                console.error('Error loading JSON file:', error);
            });
        }

        function clearInformation(){
            var parentElement = document.getElementById("informations");
                    // Loop through each child element
                    if (parentElement.firstChild!=null) {
                    // Remove all child nodes
                    while (parentElement.firstChild) {
                        parentElement.removeChild(parentElement.firstChild);
                    }
                    pic.src="";

                    }

        };

        function addInformation(){
            var found=false;
            for(var i=0;i<dogs_data.length;i++)
                    {
                        if(dogs_data[i].name==selected)
                        {
                            found=true;
                            pic.src=dogs_data[i].picture;
                            var place = $('<p id="place">').text('Menhely: '+dogs_data[i].place);
                            $('#informations').append(place);
                            var age = $('<p id="age">').text('Kor: '+dogs_data[i].age);
                            $('#informations').append(age);
                            var health = $('<p id="health">').text("Egészségügyi információk:"+dogs_data[i].health);
                            $('#informations').append(health);
                            var good_with = $('<p id="good_with">').text('Jól kijön:' +dogs_data[i].good_with);
                            $('#informations').append(good_with);
                            $('#informations').append("<label for='favcolor'>Nyakörv színe:</label>&nbsp;&nbsp;<input type='color' id='favcolor' value='#ff0000'>")
                        }
                    }
                    
                    if(!found)
                    $('#informations').append("<p> Nincs ilyen kutya az adatbázisban'</p>");
        };
        

        var emailInput = document.getElementById('email');
        var p_code_Input = document.getElementById('postal_code');
        var name_Input = document.getElementById('name');
        var address_Input = document.getElementById('address');

        function checkValid(){

            if (!p_code_Input.checkValidity()) {
                alert("Hiba, az irányítószám 4 jegyű számkód");
                p_code_Input.classList.add('error');
            } else {
                p_code_Input.classList.remove('error');
            }

            if(!emailInput.checkValidity()) {
                alert("Hiba, rossz email forma");
                emailInput.classList.add('error');
            } else {
                emailInput.classList.remove('error');
            }
            
            if(!name_Input.checkValidity()) {
                alert("Hiba, a név hossza minimum 3 karakter");
                name_Input.classList.add('error');
            } else {
                name_Input.classList.remove('error');
            }

            if(!address_Input.checkValidity()) {
                alert("Hiba, a lakcím kitöltése kötelező");
                address_Input.classList.add('error');
            } else {
                address_Input.classList.remove('error');
            }


            var date = document.getElementById("birth");
            var varDate = new Date(date.value); //dd-mm-YYYY
            var today = new Date();
            today.setHours(0,0,0,0);

            if(varDate >= today) {
                alert("Hiba, szuletési idő nem lehet nagyobb a mai napnál'");
                date.classList.add('error');

            }else
            {
                date.classList.remove('error');
            }
    };
        