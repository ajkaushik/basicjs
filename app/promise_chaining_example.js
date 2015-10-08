//We can chain prmoises to perform operaions in steps
//for example : We made a service call and we got some data, using that
//data we can make another call to service, it can be achieved using promises
//very easily and with very less nesting.
(function(doc) {

    var asynchronousOperation = function() {

        //Mock method for first Service call
        //we make the call, create the prmoise and then fake a asynchronous delay
        //and immediately returns the promise to caller.
        function Async1() {
            var promise1 = new Promise(function(resolve, reject) {
                var pass = true; // we are using this flag to mock service result status
                setTimeout(function() {
                    if (pass) { //If service returned success, resolve the promise
                        resolve("Success from Async1");
                    } else {
                        reject("Failure from Async1"); //else reject it
                    }
                }, 3000);
            });
            console.log("Promise1 retruned");
            return promise1;
        }

        //Mock method for second Service call, it will be only called if 
        //first service returned a success. Here also we make the call, 
        //create the prmoise and then fake a asynchronous delay
        //and immediately returns the promise to caller.
        function Async2(msg) {
            var promise2 = new Promise(function(resolve, reject) {
                var pass = true;
                setTimeout(function() {
                    if (pass) {
                        resolve(msg + " : " + "Success from Async2");
                    } else {
                        reject(msg + " : " + "Failure from Async2");
                    }
                }, 4000);
            });
            console.log("Promise2 retruned");
            return promise2;
        }

        var asyncPendingResult = Async1(); // First Async service call made
        asyncPendingResult // It returned a promise
            .then(function(result) {
                return Async2(result); // First service call was successful, 
                //call next service method
            })
            .then(function(result) {
                console.log(result); //Second service call was successful, print the result
            })
            .catch(function(error) {
                console.log(error); //If first call errors out, Second will not be called
            });
    }
    doc.getElementById("chainPromise").addEventListener("click", asynchronousOperation);
}(window.document))
