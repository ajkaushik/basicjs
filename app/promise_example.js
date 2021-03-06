//If we need to execute anything asynchronously in Javascript
//it will need callbacks to be invoked on asynchronous operation completion
//for example : xhr calls etc.
//MOST OF THE CODE IS SUPPORTING CODE, PLEASE FOCUS ON Promise creation and how
//handlers are attched etc.
(function(doc) {

    var resultDiv = doc.getElementById("results");

    //Appends our result to the div for display
    function appendToDiv(text) {
        resultDiv.innerHTML = resultDiv.innerHTML + text + "<BR/>";
    }

    //Callback for handling result from asynchronous operation
    var callback = function(result) {
        appendToDiv("Callback Invoked : " + result)
    }

    //We are assigning a function expression and then invoke it immediately
    //which retruns another function pointer, which will be called on button click
    //we did this, just to capture the reference of callback function in closure
    //for example purpose
    var asynchronousOperation = (function(callBackToBeInvoked) {

        return function() {
            //This could be a remote service call, we will use dummy
            //for that using setTimeout (setTimeout just executes given function, after the provided timeout)
            //We will invoke our callback
            setTimeout(function() {
                callBackToBeInvoked("Result from asynchronous operation.");
            }, 2000);
        }
    }(callback));

    doc.getElementById("makeCallback").addEventListener("click", asynchronousOperation);

}(window.document));

//Using callbacks gets complex, as nesting of callbacks increases and on top of that add error handling callbacks
//and calling one callback from another
//Promises : Its a new specification feature and used widely in major JS frameworks like angular etc.
//Promise is an object which is a placeholder for some event/value in future, so we can call asynchronous operation
//and then return a promise immediately, which will call our attached handlers in future whenever promise is resolved
//Promise has three states :
// Pending --> Promise is still pending
// Resolve --> Promise is fulfilled, success handler will be called
// Reject --> Promise failed, error handler will be called
//Handlers will be invoked even if, the prmoise was resolved/rejected before attaching the handlers
//but they will be invoked only once 
(function(doc) {

    var resultDiv = doc.getElementById("results");

    //Appends our result to the div for display
    function appendToDiv(text) {
        resultDiv.innerHTML = resultDiv.innerHTML + text + "<BR/>";
    }

    //Handler for handling result from asynchronous operation
    function success(result) {
        appendToDiv("Success : " + result)
    }

    //Handler for promise failure
    function failed(result) {
        appendToDiv("Failed : " + result)
    }

    var pass = true;
    //Our asynchronous operation will return a Promise object, which will be resolved/rejected later
    var asynchronousOperation = function() {

        //This IIFE will create a Promise on button click and return it
        var promiseFromAsynOper = (function() {
            //Create a prmoise which will be retruned to the caller
            var promise = new Promise(function(resolve, reject) {
                //This could be a remote service call, we will use dummy
                //for that using setTimeout (setTimeout just executes given function, after the provided timeout)
                //We will resolve our promise
                setTimeout(function() {
                    pass = true;
                    if (pass) {

                        //This will invoke the succes/then of Promise,if attached
                        appendToDiv("Promise resolved");
                        //IMPORTANT : SUCCESS
                        resolve("Result from asynchronous operation.");
                    } else {
                        pass = true;
                        //This will invoke the fail of Promise,if attached
                        appendToDiv("Promise failed");

                        //IMPORTANT : FAILED
                        reject("Asynchronous operation failed.");
                    }
                }, 1000);

            });
            appendToDiv("Returning promise..");
            return promise; //This will be returned immediatly
        }());

        //Attaching handlers to promise object, these handlers will be called once we 
        //promise is fulfilled
        promiseFromAsynOper
            .then(success, failed);

        //Comment above code and then uncomment below code to see,
        //how even after resolving the promise and then later attaching
        //handlers are still getting called.
        // setTimeout(function() {

        //     //Attaching the success and failure handlers to promise
        //     //Although promise had been resolved earlier, because of less timeout
        //     //But still handlers will be called on the promise; after this timeout
        //     promiseFromAsynOper.then(success).catch(failed);

        //     //Another way of attaching success and fail handlers
        //     //promiseFromAsynOper.then(success, failed); 
        // }, 4000);
    };

    doc.getElementById("makePromise").addEventListener("click", asynchronousOperation);

}(window.document));
