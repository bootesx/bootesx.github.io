var a, b, c, x = 0,
    y = 0,
    z, l;

function mt() {
    c = document.getElementById("an")
        .value;
    if (c != a - b) {
        document.getElementById("aa")
            .innerHTML = "<strong class=\"wr\">错误</strong>";
    } else {
        document.getElementById("aa")
            .innerHTML = "<strong class=\"co\">正确</strong>";
    }
    vv();
}

function cl() {
    $("#an")
        .val("");
    $("strong")
        .text("");
}

function vv() {
    if (c == a - b) {
        x++;
    } else {
        y++;
    }
    document.getElementById("cv")
        .innerHTML = "<b>" + x + "</b>";
    document.getElementById("cw")
        .innerHTML = "<b>" + y + "</b>";
}

function ww() {
    z = x + y;
    l = 100 * x / z;
    alert(l + "分");
}