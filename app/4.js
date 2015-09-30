var testModule = function() {

    //Private Variables
    var testName1 = "Name 1";
    var testName2 = "Name 2";

    function testFunction1() {
        return testName1;
    }

    function testFunction2() {
        return testName2;
    }

    return {
        testFunction1: testFunction1,
        testFunction2: testFunction2
    };

}();

document.getElementById("btnTest").addEventListener("click", function() {
    var testTxt = testModule.testFunction1();
    testTxt += "<br/>" + testModule.testName1;
    testTxt += "<br/>" + testModule.testFunction2();
    document.getElementById("divTest").innerHTML = testTxt;
});