var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickcolor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");

reset.addEventListener("click", function(){
    //generate all new colors

    colors = generateRandomColors(6);

    //pick a random color from array
    pickedColor = pickcolor();

    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change the colors of square

    for (var i=0 ; i<squares.length ; i++)
    {
        squares[i].style.backgroundColor = colors[i];
    }
})

colorDisplay.textContent = pickedColor;

    for( var i=0 ; i<squares.length ; i++)
    {
        // add Intial color to squares
        squares[i].style.backgroundColor = colors[i];

        //add click listener to squares 

        squares[i].addEventListener("click", function(){

            //grab color of clicked square

            var clickedColor = this.style.backgroundColor;
            // compare color to picked color
            if(clickedColor === pickedColor)
            {
                messageDisplay.textContent = "correct";

                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;

               
            }
            else
            {
                this.style.backgroundColor = "#232323"
                messageDisplay.textContent = "Try Again!!"
            }


            
        });
    }

    function changeColors(color){
                for(var i=0 ; i<squares.length ; i++)
                {
                    squares[i].style.backgroundColor = color;
                }
            }

    function pickcolor()
    {
        var random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }

    function generateRandomColors(num)
    {
        //make an array

        var arr = [];

        //add random colors to array
        for(var i=0 ; i<num ; i++)
        {
            //get Random color and push into array

            arr.push(randomColor());

        }

        //return that array
        return arr;
    }


    function randomColor()
    {
        // pick a red from 0 -255
        var r = Math.floor(Math.random() * 256);
        // pick a green from 0 -255
        var g = Math.floor(Math.random() * 256);
        // pick a blue from 0 -255
        var b = Math.floor(Math.random() * 256);

        return "rgb("+ r + ", " + g + ", " + b +")";
         
        
    }