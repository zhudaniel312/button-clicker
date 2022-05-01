<meta charset="utf-8">    
<html>
    <script>
        //elements
        var buttonEl    = document.getElementById("point-button");
        var displayEl   = document.getElementById("point-display");
        //update
        var dLogEl      = document.getElementById("update-log");
        //upgrade
        var gLogEl      = document.getElementById("upgrade-log");
        var thinkButton = document.getElementById("think-button");

        console.log(buttonEl);
        
        //values for game
        var proggresion      = 0;
        var motivation       = 0;
        var thinkingPower    = 0;
        
        /*
        Click:
        1. Adds a point
        2. Displays point, must be inside to update
        */
        var onClickButton = function() {
            proggresion      = proggresion + 1;
            motivation       = motivation + 1;
            
            //update
            if (proggresion >= 20) {
                updateText("Oh yeah, this <strong>game</strong> isn't much, keep going. I'm gonna add some more code.");
            }
            
            if (proggresion >= 40) {
                updateText("Let's change the points first!");
            }
            
            if (proggresion >= 60) {
                updateText("Yay! That wasn't so hard.");
                changePoint();
            } else {
                displayEl.innerHTML = "<br>Points: <strong>" + motivation;
            }
            
            if (proggresion >= 80) {
                updateText("That's how you become rich, right?");
                
                //upgrade button recoded in HTML
                createButton("Think: 25ms", "think-button");
                
                //element, note to self: try to optomise this
                thinkButton = document.getElementById("think-button");
                
                //style for new button
                thinkButton.style.color =           "black";
                thinkButton.style.backgroundColor = "rgb(255, 228, 224)";
                thinkButton.style.border =          "solid 3px text";
                thinkButton.style.fontFamily =      "Georgia";
                thinkButton.style.marginBottom =    "60px";
                thinkButton.style.width =           "95px";
                thinkButton.style.height =          "27.5px";
            }

            
            const forever = function() {
                if(motivaiton >= 25) {
                     
                }
            }
            thinkButton.addEventListener("click", onThinkButton);
            
            motivaiton = updateMotivaiton;
        }

        buttonEl.addEventListener("click", onClickButton);

        var changePoint = function() {
            displayEl.innerHTML = "<br>Motivation: <strong>" + motivation;
        }

        var createButton = function(name, id) {
            gLogEl.innerHTML = "<button id=" + id + ">" + name + "</button>"

        }
        
        var onThinkButton = function() {
                motivation -= 25;
                thinkingPower += 1;
        }

        var updateText = function(text) {
            dLogEl.innerHTML = "<br> <p>" + text + "</p>";   
        }
    </script>

</html>
