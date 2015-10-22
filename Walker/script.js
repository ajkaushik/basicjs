(function(c) {
    //Canvas related things, just for drawing purpose
    var ctx = c.getContext("2d");
    var MaxX = c.width;
    var MaxY = c.height;
    ctx.strokeStyle = getRandomColor(1000, 1);
    ctx.lineWidth = 2;

    function walker(x, y) {
        var originalX = x;
        var originalY = y;
        var startX = x;
        var startY = y;

        return {
            walk: walk
        };

        function walk() {
           //ctx.strokeStyle = getRandomColor(getRandomInt(1, 100),
            //        getRandomInt(1, 100));
            var move = getRandomInt(1, 4000);
            switch (move % 4) {
                case 0:
                    moveForward();
                    break;
                case 1:
                    moveBackWard();
                    break;
                case 2:
                    moveDown();
                    break;
                case 3:
                    moveUp();
                    break;
                default:
                    moveForward();
            }

            if (startX >= MaxX) {
                startX = 0;
                ctx.strokeStyle = getRandomColor(getRandomInt(1, 1000),
                    getRandomInt(1, 100));
            }
            if (startY >= MaxY || startY <= 0) {
                startY = originalY;
                ctx.strokeStyle = getRandomColor(getRandomInt(1, 1000),
                    getRandomInt(1, 100));
            }
        }

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        function moveForward() {
            ctx.beginPath();

            ctx.moveTo(startX, startY);
            startX = startX + 3;
            ctx.lineTo(startX, startY);
            ctx.stroke();
            ctx.closePath();
        }

        function moveBackWard() {
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            startX = startX - 1;
            ctx.lineTo(startX, startY);
            ctx.stroke();
            ctx.closePath();
        }

        function moveDown() {
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            startY = startY + 3;
            ctx.lineTo(startX, startY);
            ctx.stroke();
            ctx.closePath();
        }

        function moveUp() {
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            startY = startY - 3;
            ctx.lineTo(startX, startY);
            ctx.stroke();
            ctx.closePath();
        }
    }

    var w = walker(0, c.height / 3);
    setInterval(function() {
        w.walk();
    }, .1);
    // w = walker(0, c.height / 2);
    // for (var i = 0; i < 100; i++) {
    //   w.walk();
    // }

    function getRandomColor(seed, start) {
        // This function generates vibrant, "evenly spaced" colours (i.e. no clustering). This is ideal for creating easily distinguishable vibrant markers in Google Maps and other apps.
        // Adam Cole, 2011-Sept-14
        // HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
        var r, g, b;
        var h = start / seed;
        var i = ~~(h * 6);
        var f = h * 6 - i;
        var q = 1 - f;
        switch (i % 6) {
            case 0:
                r = 1;
                g = f;
                b = 0;
                break;
            case 1:
                r = q;
                g = 1;
                b = 0;
                break;
            case 2:
                r = 0;
                g = 1;
                b = f;
                break;
            case 3:
                r = 0;
                g = q;
                b = 1;
                break;
            case 4:
                r = f;
                g = 0;
                b = 1;
                break;
            case 5:
                r = 1;
                g = 0;
                b = q;
                break;
        }
        var c = "#" + ("00" + (~~(r * 255)).toString(16)).slice(-2) + ("00" + (~~(g * 255)).toString(16)).slice(-2) + ("00" + (~~(b * 255)).toString(16)).slice(-2);
        return (c);
    }
}(window.document.getElementById("walkArea")));
