//Uncomment this, with keyword will start throwing exception but let will work
//"use strict"

//with example 
//With gives a scope inference, where a reference to parent(scoped in with clause) can be considered
//implicit

//NOTE: Use of with is discouraged as it hinders optimizations 
//while using compressions
with(window.document) {
    var h3 = createElement("H3");
    h3.innerHTML = "Created Using With";
    body.appendChild(h3);
}

//Similar result using A self Invoking function
//But difference is we always access functions/members using
//. syntax, on needed object. There is not implict inference
(function(e) {
    var h3 = e.createElement("H3");
    h3.innerHTML = "Created Using Function";
    e.body.appendChild(h3);
})(window.document);


var testObj = {};
testObj.Prop1 = "Local Prop1";
var Prop1 = "Global Prop1";
var Prop2 = "Global Prop2";

//Some more examples of with scope
with(testObj) {
    console.log(Prop1); //Output ?
    console.log(Prop2); //Output ?
    Prop1 = "Changed inside with Prop1";
    Prop2 = "Changed inside with Prop2"
}

console.log(testObj.Prop1); //Output ?
console.log(Prop1); //Output ?
console.log(testObj.Prop2); //Output ?
console.log(Prop2); //Output ?


//let example

//In general If conditions etc., do not create a scope and var declared in that
//is also avaialable outside in parent scope
(function(e) {
    if (1) {
        var declaredInsideIf = "I am in IF"; // Declared inside if, 
        console.log(declaredInsideIf);

        function funcDeclare() {
            console.log("Function declared inside if");
        }
    }
    console.log(declaredInsideIf); // will be visible here as well
    funcDeclare(); //func will be visible here as well
})(window.document);


//let keyword allows you to create scope local variables
//but let is only allowed in "use strict" mode
//Uncaught SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
(function(e) {
    //Use strict is kind of directive which runs Javascript in strict mode
    //and adheres to the specifications and considered to be Future safe script
    //so that anything written today, most probably will run after new specification as well
    'use strict';
    if (1) {
        let declaredInsideIf = "I am in IF";
        console.log(declaredInsideIf);

        //Function declaration are not allowed in scopes
        function funcDeclare() {
            console.log("Function declared inside if");
        }
    }
    //console.log(declaredInsideIf); //Variable not visible here
    funcDeclare(); //same goes for function
})(window.document);

//With keyword --> Is not allowed in Strict mode // Uncaught SyntaxError: Strict mode code may not include a with statement
//let keyword --> Is only allowed in Strict mode //Uncaught SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode