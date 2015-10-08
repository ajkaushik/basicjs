(function() {
    console.log("***************Trivia 1*******************")
    try {
        function Func1(param1) {
            return function Func2(param1) {
                return function Func3(param1) {
                    return param1;
                }
            }
        }
        console.log(Func1(1)(2)(3)); // Output : 3
        console.log("Explaination : Func1(1) is the first call and will retun \
a function pointer pointing to Func2,then we are invoking Func(2), \
which again returns a function pointer pointing to Func3, \
then Func3(3) is invoked, which prints 3. \
As each function has a argument named param1, so each param1 is local\
to that function only. As function is scope boundary.");
        console.log("******************************************");
    } catch (err) {
        console.log(err);
    }
}());

(function() {
    console.log("***************Trivia 2*******************")
    try {
        function Func1(param1) {
            return function Func2(param1) {
                return function Func3() {
                    return param1;
                }()
            }
        }
        console.log(Func1(1)(2)); // What will be the output and why ? 2
        console.log(Func1(1)(2)(3)); // What will be the output and why ? error
    } catch (err) {
        console.log(err);
        console.log("Explaination: Func1(1) returns a function pointer to Func2\
Then Func2(2) is called, which declares Func3(), but also immediatly invokes\
it, resulting into print of param1. In second example, as Func2(2) never\
returned a function a pointer, it will give a type error.")
        console.log("******************************************");
    }
}());

(function() {
    console.log("***************Trivia 3*******************")
    try {
        function Func1() {
            var Func2 = function Func2() {
                var Func3 = function Func3() {
                    this.whereAmI = "Func3 Scope, obviously ??";
                    console.log(whereAmI); // ????? "Func3 Scope, obviously ??";
                }()
                console.log(whereAmI); // ????? "Func3 Scope, obviously ??";
            }()
            console.log(whereAmI); // ????? "Func3 Scope, obviously ??";
        }
        Func1();
        console.log(whereAmI); // ????? "Func3 Scope, obviously ??";
        console.log("Explaination : Same value will be printed everytime, as \
when we use 'this' keyword in a function; it actually refers to window object \
which is a global parent object and we just created the variable on global scope.")
        console.log("******************************************");
    } catch (err) {
        console.log(err);
    }
}());



(function() {
    console.log("***************Trivia 4*******************")
    try {
        function Func1() {
            var Func2 = function Func2() {
                function Func3() {
                    this.whereAmI2 = "Func3 Scope, obviously ??";
                    console.log(this.whereAmI2); // ????? "Func3 Scope, obviously ??"
                };
                var fun3Obj = new Func3();
                fun3Obj.whereAmI2 = "test";
                console.log(fun3Obj.whereAmI2); //??? test
                console.log(whereAmI2); // ????? undefined error
            }()
            console.log(whereAmI2); // ????? undefined error
        }
        Func1();
        console.log(whereAmI2); // ????? undefined error
        console.log("******************************************");
    } catch (err) {
        console.log(err);
        console.log("Explaination : When we create an object using 'new' operator, the 'this'\
 get assigned correctly to local scope of that function and our variable is\
 visible on global scope anymore and we will get undefined error if we try\
 to access the same outside of Func3.");
    }
}());
