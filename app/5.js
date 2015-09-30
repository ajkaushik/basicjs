function add(num1) {
    //test();
    return function(num2) {
        return num1 + num2;
    }
}

document.getElementById("btnTest").addEventListener("click", function() {
    var addNum = add(10);
    var testTxt = "<br/>" + addNum(2);
    testTxt += "<br/>" + addNum(4);
    testTxt += "<br/>" + addNum(6);
    document.getElementById("divTest").innerHTML = testTxt;
});