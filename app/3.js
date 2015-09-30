(function(doc) {


    function * g1() {
        yield 2;
        yield 3;
        yield 4;
        yield 4;
        yield 4;
        yield 4;
        yield 4;
        yield 4;
    }

    function * g2() {
        yield 1;
        yield * g1();
        yield 5;
    }

    var iterator = g2();

    console.log(iterator.next()); // { value: 1, done: false }
    console.log(iterator.next()); // { value: 2, done: false }
    console.log(iterator.next()); // { value: 3, done: false }
    console.log(iterator.next()); // { value: 4, done: false }
    console.log(iterator.next()); // { value: 4, done: false }
    console.log(iterator.next()); // { value: 4, done: false }
    console.log(iterator.next()); // { value: 4, done: false }
    console.log(iterator.next()); // { value: 4, done: false }
    console.log(iterator.next()); // { value: 4, done: false }
    console.log(iterator.next()); // { value: 4, done: false }
    console.log(iterator.next()); // { value: 4, done: false }
    console.log(iterator.next()); // { value: 4, done: false }
    console.log(iterator.next()); // { value: 5, done: false }
    console.log(iterator.next()); // { value: undefined, done: true }


    //    function * testGen() {
    //        alert(1);
    //        yield;
    //        alert(2);
    //        yield;
    //        alert(3);
    //    }
    //    var a = testGen();
    //    a.next();
    //a.next();

    //    function run(genfun) {
    //        // instantiate the generator object
    //        var gen = genfun();
    //        // This is the async loop pattern
    //        function next(err, answer) {
    //            var res;
    //            if (err) {
    //                // if err, throw it into the wormhole
    //                return gen.throw(err);
    //            } else {
    //                // if good value, send it
    //                res = gen.next(answer);
    //                alert(JSON.stringify(res));
    //            }
    //            if (!res.done) {
    //                // if we are not at the end
    //                // we have an async request to
    //                // fulfill, we do this by calling 
    //                // `value` as a function
    //                // and passing it a callback
    //                // that receives err, answer
    //                // for which we'll just use `next()`
    //                res.value(next);
    //            }
    //        }
    //        // Kick off the async loop
    //        next();
    //    }
    //
    //
    //    run(function * () {
    //        try {
    //            alert(1);
    //            var res1 = yield testFunc();
    //            alert(2);
    //            var res2 = yield testFunc();
    //            alert(3);
    //            alert(res1 + " " + res2);
    //        } catch (e) {
    //            alert(e.message);
    //        }
    //    });
    //
    //    function testFunc() {
    //        // alert("test");
    //        return function(callback) {
    //            callback(undefined, "TEts value");
    //        }
    //    }

    //    function * naturalNumbers() {
    //        var n = 1;
    //        while (n < 4) {
    //            var o = yield n++;
    //            alert(o);
    //        }
    //    }
    //
    //    var n = naturalNumbers();
    //    var next = n.next();
    //    while (n && !next.done) {
    //        alert(next.value);
    //        next = n.next("test" + next.value);
    //    }
    //    function test(x) {
    //        var x = "test";
    //        var b = x;
    //        alert("x =" + x);
    //        alert("b =" + b);
    //        b = "hello";
    //        alert("x =" + x);
    //        alert("b =" + b);
    //        alert("x =" + x);
    //        // alert(arguments);
    //        alert("Argument 0 = " + arguments[0]);
    //        arguments[0] = "value changed";
    //        alert("x =" + x);
    //    }
    //
    //    test("abc");

    //    //    function test() {
    //    //
    //    //        return abc;
    //    //
    //    //        function abc() {
    //    //            alert("test");
    //    //        }
    //    //
    //    //    }
    //    //
    //    //    test()();
    //
    //    var foo = 2;
    //
    //    foo = 1;
    //
    //    function bar() {
    //
    //        function foo() {}
    //        foo = 10;
    //        return;
    //
    //
    //    }
    //
    //    bar();
    //    alert(foo); // returns 1


})(window.document);


//(function(doc) {
//
//    "use strict";
//
//    function test() {
//        try {
//            var counter = 10;
//            return {
//                a: function() {
//                    alert(counter);
//                },
//                b: test,
//                c: c
//                // d: d
//            };
//
//            alert(counter);
//        } finally {
//            counter = 13;
//        }
//
//        function c() {
//            counter = counter + 1;
//        }
//
//        function test() {
//            alert(counter);
//        }
//    }
//
//    var test = test();
//    //test.d();
//    test.a();
//    test.b();
//    test.c();
//    // test.c();
//    test.b();
//    test.a();
//
//    document.getElementById("btnTest").addEventListener("click", test.a);
//})(window.document);

//
//
//
//(function(doc) {
//
//    for (var i = 0; i < 10; i++) {
//        var btn = doc.createElement("button");
//        btn.innerHTML = "Button " + i;
//        btn.style = "margin:5px;"
//        btn.onclick = function(num) {
//            return function() {
//                alert("Clicked " + num);
//            };
//            //  return abc;
//        }(i);
//
//        doc.body.appendChild(btn);
//    }
//
//})(window.document);