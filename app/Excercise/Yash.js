function SetMessage(p) {

    console.log('Message Set:' + p);

    f2 = function() {
        return p;
    };

}

function Display(p) {
    console.log(p + ":" + f2());
}
