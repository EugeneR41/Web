var pole = [];
var blocks = []
var size = 105;
var a = 0,
    b = 0,
    c = 0,
    d = 0,
    e = 0,
    f = 0,
    g = 0,
    q = 0;
var col = '#fff';
var score = 0;
var fig = -1;
var perm;

function init() {
    canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        drawBack(ctx, '#202020', '#aaa', canvas.width, canvas.height);
    }
}

function drawBack(ctx, col1, col2, w, h) {
    ctx.save();
    var g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(1, col1);
    g.addColorStop(0, col2);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    ctx.restore();
    new_block();
    for (i = 0; i < pole.length; i++)
        pole[i].draw(ctx);
}
Figure = new Class({
    initialize: function(X, Y) {
        this.posX = X;
        this.posY = Y;
        this.color = '#fff';
    },
});

block = new Class({
    Extends: Figure,

    draw: function(ctx) {
        with(this) {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.moveTo(this.posX, this.posY);
            ctx.lineTo(this.posX + size, this.posY);
            ctx.lineTo(this.posX + size, this.posY + size);
            ctx.lineTo(this.posX, this.posY + size);
            ctx.closePath();
            ctx.strokeStyle = '#120909';
            ctx.lineWidth = 5;
            ctx.fill();
            ctx.stroke();
        }
    }
});

function new_block() {
    for (i = 30; i < 800; i += size)
        for (j = 30; j < 800; j += size) {
            if (i > 900) {
                i = 5;
                j += size;

            }
            pole.push(new block(i, j));
        }

}

function draw(block, color) {
    pole[block].color = color;
    pole[block].draw(ctx);
}

function clear(x, y, color) {
    while (y >= 0) {
        pole[x].color = color;
        pole[x].draw(ctx);
        x += 8;
        y -= 1;
    }

}

function get_col(x) {
    if (x == 0)
        return '#f00'
    if (x == 1)
        return '#1500ff'
    if (x == 2)
        return '#00ff1a'
    if (x == 3)
        return '#ffd500'
}

function randomcol() {
    rancol = randomInt(0, 4);
    return (get_col(rancol))
}

function randomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min));
}

function check_box(number) {
    fig = number;
}

function check_e() {
    for (i = 0; i < pole.length; i++) {
        if ((pole[i].posX < event.clientX - 510 && pole[i].posX + size > event.clientX - 510) && (pole[i].posY < event.clientY - 25 && pole[i].posY + size > event.clientY - 25)) {
            if (pole[i].color == '#fff' && fig == 0) {
                draw(i, randomcol())
            }

            if (pole[i].color == '#fff' && pole[i + 1].color == '#fff' && pole[i + 2].color == '#fff' && fig == 1) {
                if (pole[i].posY < 660) {
                    perm = randomcol();
                    draw(i, perm)
                    draw(i + 1, perm)
                    draw(i + 2, perm)
                }
            }

            if (pole[i].color == '#fff' && pole[i - 8].color == '#fff' && pole[i + 1].color == '#fff' && pole[i + 2].color == '#fff' && fig == 2) {
                if (pole[i].posY < 660) {
                    perm = randomcol();
                    draw(i, perm)
                    draw(i + 1, perm)
                    draw(i + 2, perm)
                    draw(i - 8, perm)
                }
            }

            if (pole[i].color == '#fff' && pole[i + 1].color == '#fff' && pole[i + 9].color == '#fff' && pole[i - 7].color == '#fff' && fig == 3) {
                if (pole[i].posY < 760) {
                    perm = randomcol();
                    draw(i, perm)
                    draw(i + 1, perm)
                    draw(i + 9, perm)
                    draw(i - 7, perm)
                }
            }
            a = 0;
            b = 0;
            c = 0;
            d = 0;
            e = 0;
            f = 0;
            g = 0;
            q = 0;

        }
    }
    for (i = 0; i <= 56; i += 8) {
        if (pole[i].color != col)
            a++;
        if (a == 8) {
            setTimeout('clear(0, a, "#fff")', 100)
            setTimeout('a = 0', 150)
            score += 10;
        }

    }
    for (i = 1; i <= 57; i += 8) {
        if (pole[i].color != col)
            b++;
        if (b == 8) {
            setTimeout('clear(1, b, "#fff")', 100)
            setTimeout('b = 0', 150)
            score += 10;
        }

    }
    for (i = 2; i <= 58; i += 8) {
        if (pole[i].color != col)
            c++;
        if (c == 8) {
            setTimeout('clear(2, c, "#fff")', 100)
            setTimeout('c = 0', 150)
            score += 10;
        }

    }
    for (i = 3; i <= 59; i += 8) {
        if (pole[i].color != col)
            d++;
        if (d == 8) {
            setTimeout('clear(3, d, "#fff")', 100)
            setTimeout('d = 0', 150)
            score += 10;
        }

    }
    for (i = 4; i <= 60; i += 8) {
        if (pole[i].color != col)
            e++;
        if (e == 8) {
            setTimeout('clear(4, e, "#fff")', 100)
            setTimeout('e = 0', 150)
            score += 10;
        }

    }
    for (i = 5; i <= 61; i += 8) {
        if (pole[i].color != col)
            f++;
        if (f == 8) {
            setTimeout('clear(5, f, "#fff")', 100)
            setTimeout('f = 0', 150)
            score += 10;
        }

    }
    for (i = 6; i <= 62; i += 8) {
        if (pole[i].color != col)
            g++;
        if (g == 8) {
            setTimeout('clear(6, g, "#fff")', 100)
            setTimeout('g = 0', 150)
            score += 10;
        }

    }
    for (i = 7; i <= 63; i += 8) {
        if (pole[i].color != col)
            q++;
        if (q == 8) {
            setTimeout('clear(7, q, "#fff")', 100)
            setTimeout('q = 0', 150)
            score += 10;
        }

    }
    document.getElementById("scor").innerHTML = score;

}