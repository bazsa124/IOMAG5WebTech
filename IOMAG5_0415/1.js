
                var asd=false;
                
                    $(document).ready(function(){
                        $("#hide").click(function(){
                            if(!asd)
                            {
                                $(".hiding").hide();
                                asd=true;}
                            else
                            {
                                    $(".hiding").show();
                                asd=false;
                            }
                        });
                    });