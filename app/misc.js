//Hoisting 1
(function() {
    try {
        console.log(noExistentVariable);
    } catch (exception) {
        console.error(exception);
        console.log(newVarInCatchBlock);
        var newVarInCatchBlock = "Created in Catch";
    }
    console.log(newVarInCatchBlock);
}());

//Hoisting 2
(function() {
    try {
        console.log(newVarInCatchBlock);
    } catch (exception) {
        console.error(exception);
        console.log(newVarInCatchBlock);
        var newVarInCatchBlock = "Created in Catch";
    }
    console.log(newVarInCatchBlock);
}());