var model = {
    x: 150,
    y: 150,
    width: 100,
    height: 100,
    border: true
};

var moving = false;
var start = 0;
var delta = 0;
var moveType = "none";
var original = 0;
var charType = "none";

$(document).ready(function () {

    $("#me").click(function () {

        if ($(this).hasClass("hasborder")) {
            $(this).removeClass("hasborder");
            model.border = false;
            position();
        } else {
            $(this).addClass("hasborder");
            model.border = true;
            position();
        }
    });

    function evalNumber(prop, field, evt) {
        if (evt.keyCode == 13) {
            var start = model[prop];
            var parsed = parseInt(field.val());
            if (parsed != NaN && parsed >= 20) {
                model[prop] = parsed;
            } else {
                model[prop] = start;
                field.val(start);
            }
            position();
        }
    }

    $("#w_val").keyup(function (evt) {
        evalNumber("width", $(this), evt);
    });
    $("#h_val").keyup(function (evt) {
        evalNumber("height", $(this), evt);
    });
    $("#x_val").keyup(function (evt) {
        evalNumber("x", $(this), evt);
    });
    $("#y_val").keyup(function (evt) {
        evalNumber("y", $(this), evt);
    });

    function startChange(evt, characteristic, field) {
        moving = true;
        delta = 0;
        start = evt[characteristic];
        original = model[field];
        moveType = field;
        charType = characteristic;
    }

    $("#width_handle").mousedown(function (evt) {
        startChange(evt, "pageX", "width");
    });
    $("#height_handle").mousedown(function (evt) {
        startChange(evt, "pageY", "height");
    });
    $("#x_handle").mousedown(function (evt) {
        startChange(evt, "pageX", "x");
    });
    $("#y_handle").mousedown(function (evt) {
        startChange(evt, "pageY", "y");
    });

    $(document).mousemove(function (evt) {
        if (!moving) {
            return;
        } else {
            delta = evt[charType] - start;
            model[moveType] = original + delta > 20 ? original + delta : 20;
            position();
        }
    });

    $(document).mouseup(function (evt) {
        moving = false;
        moveType = "none";
    });

    grabReferences();
    position();
});

// margin and border affect outside measures
// padding effects inside measures


var panel;
var handle_w;
var handle_h;

function grabReferences() {
    panel = $("#me");
    handle_w = $("#width_handle");
    handle_h = $("#height_handle");
    handle_x = $("#x_handle");
    handle_y = $("#y_handle");
}

function position() {
    panel.offset({
        top: model.y,
        left: model.x
    });
    panel.width(model.width);
    panel.height(model.height);

    $("#w_val").val(model.width);
    $("#h_val").val(model.height);
    $("#x_val").val(model.x);
    $("#y_val").val(model.y);

    handle_w.offset({
        top: model.y + model.height / 2 - 10,
        left: model.x + model.width + (model.border ? 2 : 0)
    });
    handle_w.html("W: " + model.width + "px");

    var hx = model.x + model.width - 75 + (model.border ? 2 : 0);
    hx = model.width < 75 ? model.x : hx;

    handle_h.offset({
        top: model.y + model.height + (model.border ? 2 : 0),
        left: hx
    });
    handle_h.html("H: " + model.height + "px");

    handle_x.offset({
        top: model.y + model.height / 2 - 10,
        left: model.x - 75
    });
    handle_x.html("X: " + model.x + "px");

    handle_y.offset({
        top: model.y - 20,
        left: model.x
    });
    handle_y.html("Y: " + model.y + "px");
}