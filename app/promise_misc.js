(function(doc) {

    function AsyncServiceCall(requestId) {
        var promise = new Promise(promiseHandler);
        console.log("Promise returned : Request " + requestId);
        return promise;

        function promiseHandler(resolve, reject) {
            //Fake service call
            setTimeout(function() {
                //var pass = requestId!==6;
                var pass = true;
                if (pass) {
                    resolve("Success : Request " + requestId);
                } else {
                    reject("Failure : Request " + requestId);
                }
            }, 2000);

        }
    }

    //If All promises are resolved, then only success handler will be called
    //with an array of results in same order, in which promise were supplied to 
    //Promise.All 
    function successHandler(results) {
        results.forEach(function(result) {
            console.log(result);
        });
    }

    //If Any one of promise fails, all the promises will be rejected immediately
    //irrespective of their status 
    function errorHandler(errs) {
        console.log(errs);
    }

    //Fake data, just to mock multiple service calls
    var serviceRequestIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var clickHandler = function() {
        //Now we will call our mock service method for each request
        //resulting in 10 different requests, and once all of them are
        //fulfilled(or any of them is rejected), our success(or error) handler
        //will be called
        Promise.all(serviceRequestIds.map(AsyncServiceCall))
            .then(successHandler)
            .catch(errorHandler);

    }
    doc.getElementById("e1").addEventListener("click", clickHandler);

}(window.document))
