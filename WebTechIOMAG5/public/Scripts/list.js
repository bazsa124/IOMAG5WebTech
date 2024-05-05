var where=0;
            var dataFile;
            function load(){
                document.getElementById("home_icons").addEventListener('click',function(){window.open('index.html',"_self")});
                document.getElementById("list_icons").addEventListener('click',function(){window.open('list.html',"_self")});
                document.getElementById("form_icons").addEventListener('click',function(){window.open('form.html',"_self")});
                document.getElementById("video_icons").addEventListener('click',function(){window.open('video.html',"_self")});
                document.getElementById("game").addEventListener('click',function(){window.open('memory_game.html',"_self")});
                document.getElementById("previous").addEventListener('click',function(){previousItem()});
                document.getElementById("next").addEventListener('click',function(){nextItem();});
                loadJSON();
            }
            
            function nextItem(){
                if(where>=dataFile.length-1)
                    where=0;
                else
                    where++;
                loadData();
            }

            function previousItem(){
                if(where<=0)
                    where=dataFile.length-1;
                else
                    where--;
                    loadData();
            }

            function loadJSON(){
                $.getJSON("../JSONs/breeds.json", function( data ) {
                            dataFile=data;
                            loadData();
                });
            }

            function loadData(){
                document.getElementById("dog_breed").innerText=dataFile[where].breed;
                document.getElementById("dog_pic").src=dataFile[where].picture;
                document.getElementById("link").innerText=dataFile[where].link_name;
                document.getElementById("link").href=dataFile[where].link_href;
                document.getElementById("describtion").innerText=dataFile[where].desc;
                let IDs=Object.keys(dataFile[where].attibutes);
                for( var i=0; i< IDs.length;i++)
                {
                    var temp=document.getElementById(IDs[i]).childNodes[1];
                    while (temp.firstChild) {
                        temp.removeChild(temp.firstChild);
                    }
                }
                fillAttributes();
            }
            
            $(document).ready(function() {
                var containerWidth = $("#space").width();
                var containerHeight = $("#space").height();
                var pictureWidth = $("#moving_pic").width();
                var pictureHeight = $("#moving_pic").height();
                
                var isMoving = false;
                var angle = 0;
                
                function movePicture() {
                    if (!isMoving) return;
            $("#moving_pic").animate({
                left: "90%", // Move to the right edge
                top: "0%",
            }, 5000, function() {
                // Rotate picture by 90 degrees
                $(this).css("transform", "rotate(90deg)");
                
                $(this).animate({
                    top: "90%", // Move to the bottom edge
                }, 5000, function() {
                    // Rotate picture by 90 degrees
                    $(this).css("transform", "rotate(180deg)");
                    
                    $(this).animate({
                        left: "0%", // Move to the left edge
                    }, 5000, function() {
                        // Rotate picture by 90 degrees
                        $(this).css("transform", "rotate(270deg)");
                        
                        $(this).animate({
                            top: "0%", // Move to the top edge
                        }, 5000, function() {
                            // Reset rotation
                            $(this).css("transform", "rotate(0deg)");
                            
                            // Repeat the animation
                            movePicture();
                        });
                    });
                });
            });
        };
                
                $("#moving_pic").click(function() {
                    if (isMoving) {
                    isMoving = false;
                    $(this).stop();
                    } else {
                    isMoving = true;
                    movePicture();
                    }
                });
  
            // Start the animation initially
                movePicture();
            });

            function fillAttributes(){
                let IDs=Object.keys(dataFile[where].attibutes);
                for( var i=0; i< IDs.length;i++)
                {
                    var temp=document.getElementById(IDs[i]).childNodes[1];
                    var j;
                    for(j=0;j<dataFile[where].attibutes[IDs[i]];j++)
                    {
                        var newSpan = document.createElement('span');
                        newSpan.textContent = 'pets';
                        newSpan.classList.add('material-symbols-outlined');
                        newSpan.classList.add('goodPawn');
                        temp.appendChild(newSpan);
                    }
                    while(j<5)
                    {
                        var newSpan = document.createElement('span');
                        newSpan.textContent = 'pets';
                        newSpan.classList.add('material-symbols-outlined');
                        temp.appendChild(newSpan);
                        j++;
                    }
                }
            }