//Self Invoking Function or Immediatley Invoked Function (IIFE)
//This pattern is really userful for maintaining scope and closures
(function(param) {
    //function body
    //.......
}(param)); // Self invoke the function



//A function without closure
(function(doc) {

    for (var i = 0; i < 10; i++) {
        var btn = doc.createElement("button");
        btn.innerHTML = "Button " + i;
        btn.style = "margin:5px;"
        //We are just assigning here, no execution; function will be executed onlye if button is clicked later
        btn.onclick = function() {
            alert("Clicked " + i);
        }

        doc.body.appendChild(btn);
    }

}(window.document));

//Problem : IN above fucntion, we are adding 10 buttons and whenever any buttonis clicked
//we will always see same alert with Value 10 --> The last value of i
//Cause : In javascript functions have closures and in above assignment, we just assigned the function to click event
//there is no closure attached to that fucntion which can capture the current value of i and retain it
//NOTE : Closurs are always created upon execution

//Solution : Create the closure, and capture current value of i
//Step 1 : Create a closure using a IIFE, to capture the current value of i
//Step 2 : We will need a fucntion for button click event handler, so our IIFe should capture the
//value of i and also, return a function for later use whenever button is clicked
(function(doc) {

    for (var i = 0; i < 10; i++) {
        var btn = doc.createElement("button");
        btn.innerHTML = "Button " + i;
        btn.style = "margin:5px;"
        btn.onclick = (function(currentValue) { //Create a function expression
            return function() { //which will return a function
                alert("Clicked " + currentValue); //currentValue is a parameter of parent function, but will be available to
                //inner function because of closure        
            }
        }(i)); // Invoke the function, and pass current value of i, so that it can be captured in closure

        doc.body.appendChild(btn);
    }

}(window.document));

//Now using above code, when any button is clicked, it will alert the correct value of i
//which was there at the time of button creation