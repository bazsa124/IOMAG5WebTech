
                var _first=false;
                var _second=false;
                    $(document).ready(function(){
                        $("#toHide").click(function(){
                            if(!_first)
                            {
                                $(".hiding").hide();
                                _first=true;}
                            else
                            {
                                    $(".hiding").show();
                                    _first=false;
                            }
                        });

                        $("#toAnimate").click(function(){
                            {
                                $("#moving").animate({
                                    left: '500px',
                                    fontSize:'30pt'
                                },2000);

                                $("#moving").animate({
                                    marginTop: '300px',
                                    width:'auto',
                                    height:'+=50px'
                                },2000);

                                $("#moving").animate({
                                    opacity:'0.4',
                                    left:'50px'
                                },2000);

                                $("#moving").animate({
                                    opacity:'1.0',
                                    fontSize:'12pt',
                                    marginTop:'0px',
                                    height:'20px'
                                },2000,function(){alert('Vege');});
                            }
                            
                            
                        });

                        $("#ToOpenClose").click(function(){
                            if(!_second)
                            {
                                $("#moving").slideUp(2000);
                                $("#moving").slideDown(2000);
                                $("#moving").animate({
                                    left:'300px',
                                    width:'300px'
                                },2000);
                            }
                        });

                    });