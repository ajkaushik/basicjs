var httpService = (function() {
    return {
        get: get
    };

    function get(url) {
        var promise = new Promise(function(resolve, reject) {
            //Create XHR object for asynchronous service call
            //Make a GET call to service url
            var request = new XMLHttpRequest();
            request.open('GET', url);
            request.onload = function() {
                if (request.status == 200) {
                    //Got OK from serverm resolve the server with response
                    console.log(request.response);
                    var result = JSON.parse(request.response)
                    resolve(result.value);
                } else {
                    //Not OK, reject promise with some status
                    reject(Error(request.statusText));
                }
            };

            //Error in xhr request, reject the promise
            request.onerror = function() {
                reject(Error('Error fetching data.'));
            };
            //Send the xhr request
            request.send();
        });
        return promise;
    }
}());
