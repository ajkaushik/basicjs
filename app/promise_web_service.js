(function(doc, dataService) {

    function getData() {
        console.log("Data Service called for Random data.");
        return dataService.getDataRandom();
    }

    function appendToResults(result, header) {
        resultDiv.innerHTML = resultDiv.innerHTML + "<p> " + header + " <br/>" + result + "</p>";
    }

    function successRandom(result) {
        appendToResults(result.joke, "Random Joke :");
        return getJokeById(result.id);
    }

    function successId(result) {
        appendToResults(result.joke, "Joke By Id :");
    }

    function error(err) {
        console.error("Error : " + err);
    }

    var clickHandler = function() {
            getData()
            .then(successRandom)
            .then(successId)
            .catch(error);
    };

    function getJokeById(id) {
        console.log("Data Service called for data by Id : " + id);
        return dataService2.getDataById(id);
    }

    var resultDiv = doc.getElementById("results");
    doc.getElementById("btnCallApi").addEventListener("click", clickHandler);
}(window.document, dataService1, dataService2))
