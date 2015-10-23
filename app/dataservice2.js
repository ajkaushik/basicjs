var dataService2 = (function(http) {
    return {
        getDataById: getData
    };

    function getData(id) {
        var apiUrl = "http://api.icndb.com/jokes/" + id;
        return http.get(apiUrl);
    }
}(httpService));
