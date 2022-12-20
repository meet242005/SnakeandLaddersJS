
            var player1 = {name:"",color:"url(yellow.png);",position:1,haswon:"false"};
            var player2 = {name:"",color:"url(blue.png);",position:1,haswon:"false"};
            var player3 = {name:"",color:"url(red.png);",position:1,haswon:"false"};
            var player4 = {name:"",color:"url(green.png);",position:1,haswon:"false"};
            var player ={};

            function setplayer()
            {
                var playerdata= document.cookie;
                playerdata=playerdata.split(",");
                player1.name=playerdata[0].split("=")[1];
                player2.name=playerdata[1].split("=")[1];
                player3.name=playerdata[2].split("=")[1];
                player4.name=playerdata[3].split("=")[1];
                
                document.getElementById("p1n").innerHTML="Player 1: "+player1.name
                document.getElementById("p2n").innerHTML="Player 2: "+player2.name
                document.getElementById("p3n").innerHTML="Player 3: "+player3.name
                document.getElementById("p4n").innerHTML="Player 4: "+player4.name
                document.getElementById("currentturn").innerHTML= player1.name+"'s Turn"   
                document.getElementById(1).style = "background-image: url(allcolor.png);";
                
                
            }

            function setplayerposition()
            {
                document.getElementById("p1p").innerHTML="Position: "+player1.position
                document.getElementById("p2p").innerHTML="Position: "+player2.position
                document.getElementById("p3p").innerHTML="Position: "+player3.position
                document.getElementById("p4p").innerHTML="Position: "+player4.position
            }
            
            function diceanimate()
            {   
                var dicecount = 0;
                if(player==player1)
                document.getElementById("dice").style.backgroundColor="turquoise";
                else if(player==player2)
                document.getElementById("dice").style.backgroundColor="orange";
                    else if(player==player3)
                    document.getElementById("dice").style.backgroundColor="greenyellow";
                        else if(player==player4)
                        document.getElementById("dice").style.backgroundColor="yellow";
                var timer = setInterval(() => {
                    document.getElementById("diceimage").src=(Math.floor(Math.random() * 6) + 1)+".png"
                    dicecount++;
                    if(dicecount==10)
                    {
                        clearInterval(timer);
                        rolldice();
                    }
                }, 200);
                
            }
            
            function rolldice()
            {
                if(player==player1)
                player=player2
                else if(player==player2)
                player=player3
                    else if(player==player3)
                    player=player4
                        else
                            player=player1


                if(player.haswon=="true")
                {
                if(player==player1)
                    player=player2
                    else if(player==player2)
                    player=player3
                        else if(player==player3)
                        player=player4
                            else if(player==player4)
                                player=player1
                }

                
                
               var dice = Math.floor(Math.random() * 6) + 1;

               if(arguments[0]==6)
               {
                   dice = 6;
               }

               var imgurl = dice+".png"
               document.getElementById("diceimage").src=imgurl
              
               document.getElementById("currentturn").innerHTML= player.name+" rolled the dice"

              
                
                if(player.position<=50)
                {
                
                document.getElementById(player.position).style = "background-image: none";
                player.position= (player.position+dice>50)?player.position:player.position+dice;
                document.getElementById(player.position).style = "background-image: "+player.color;

                if(player.position==4)
                    {
                        document.getElementById(player.position).style = "background-image: none";
                        player.position= 25;
                        document.getElementById(player.position).style = "background-image: "+player.color;
                        if(player==player1)
                        player=player4
                        else if(player==player2)
                        player=player1
                            else if(player==player3)
                            player=player2
                                else
                                    player=player3
                    }

                if(player.position==8)
                    {
                        document.getElementById(player.position).style = "background-image: none";
                        player.position= 34;
                        document.getElementById(player.position).style = "background-image: "+player.color;
                        if(player==player1)
                        player=player4
                        else if(player==player2)
                        player=player1
                            else if(player==player3)
                            player=player2
                                else
                                    player=player3
                    }
                if(player.position==12)
                    {
                        document.getElementById(player.position).style = "background-image: none";
                        player.position= 31;
                        document.getElementById(player.position).style = "background-image: "+player.color;
                        if(player==player1)
                        player=player4
                        else if(player==player2)
                        player=player1
                            else if(player==player3)
                            player=player2
                                else
                                    player=player3
                    }
                if(player.position==36)
                    {
                        document.getElementById(player.position).style = "background-image: none";
                        player.position= 17;
                        document.getElementById(player.position).style = "background-image: "+player.color;
                    }
                if(player.position==41)
                    {
                        document.getElementById(player.position).style = "background-image: none";
                        player.position= 3;
                        document.getElementById(player.position).style = "background-image: "+player.color;
                    }
                if(player.position==44)
                    {
                        document.getElementById(player.position).style = "background-image: none";
                        player.position= 14;
                        document.getElementById(player.position).style = "background-image: "+player.color;
                    }
                if(player.position==47)
                    {
                        document.getElementById(player.position).style = "background-image: none";
                        player.position= 32;
                        document.getElementById(player.position).style = "background-image: "+player.color;
                    }
                if(player.position==50)
                    {
                        if(player.haswon=="false")
                        {
                        alert("Congratulations, "+player.name+" has won the round");
                        player.haswon="true";
                        }
                        else
                        {
                            //skip the turn if won
                            if(player==player1)
                            player=player2
                            else if(player==player2)
                            player=player3
                                else if(player==player3)
                                player=player4
                                    else
                                        player=player1
                        }
                      
                    }   

                    if(dice==6)
                    {
                        if(player==player1)
                        player=player4
                        else if(player==player2)
                        player=player1
                            else if(player==player3)
                            player=player2
                                else
                                    player=player3
                    }
                    setplayerposition()
                    document.getElementById(player1.position).style = "background-image: "+player1.color;
                    document.getElementById(player2.position).style = "background-image: "+player2.color;
                    document.getElementById(player3.position).style = "background-image: "+player3.color;
                    document.getElementById(player4.position).style = "background-image: "+player4.color;
                }   
               
              
              
                       
            }

            function easteregg()
            {
                rolldice(6);
            }