function object1() {
    this.funcParent = function() {
        alert("Parent Function " + this.propChild);
    }
}

object2.prototype = object1;

//object2.prototype = Object.create(object1.prototype);
//object2.prototype.constructor = object2;

function object2(propChildValue) {

    //initializing base
    object1.call(this);

    this.propChild = propChildValue,
    this.funcChild = function() {
        alert(this.propChild);
    }
}

var object2Inst = new object2("Child property");


document.getElementById("btnTest").addEventListener("click", function() {

    object2Inst.funcChild();
    object2Inst.funcParent();

});