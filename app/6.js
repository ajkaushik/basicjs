document.getElementById("btnTest").addEventListener("click", function() {
    var testTxt = "<br/>" + (1 === 1);
    testTxt += "<br/>" + (1 === "1.0");
    testTxt += "<br/>" + (1 === "1");
    testTxt += "<br/>" + (1 == 1);
    testTxt += "<br/>" + (1 == "1");
    testTxt += "<br/>" + (1 == "1.0");
    document.getElementById("divTest").innerHTML = testTxt;
});