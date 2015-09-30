var p = new Promise(function(resolve, reject) {
    var chk = false;
    setTimeout(function() {
        //async operation
        //api called
        verifyAfterApiCall();
    }, 5000);


    function verifyAfterApiCall() {

        //Api response was valid
        chk = true;

        //Api response is back, resolve promise
        if (chk) {
            resolve("Method successful");
        } else {
            reject(Error("Method failed"));
        }
    }

});

document.getElementById("btnTest").addEventListener("click", function() {
    p.then(function(result) {
        alert(result);
    }, function(err) {
        alert(err);
    });
    alert("back from click");
});