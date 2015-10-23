var dataService1 = (function(http) {
    return {
        getDataRandom: getData
    };

    function getData() {
        var apiUrl = "http://api.icndb.com/jokes/random";
        return http.get(apiUrl);
    }
}(httpService));
