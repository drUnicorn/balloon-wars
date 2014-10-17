window.browser = null;
window.autopilot = null;

var currentMapLocation = 0;

//initialization
function startDemo()
{
    //check map browser support (webgl)
    if (Vadstena.checkSupport() == false) {
        alert("Unfturtunately, 3D map browser need web browser support for WebGL. Sorry.");
        return;
    }

    var element_ = document.getElementById('map');

    //init vadstena - 3D map library from melown.com
    browser = new Vadstena.Browser('map', './source/mapConfig.json', './source/browserConfig.json', onBrowserInitialized, onBrowserUpdate);
    browser.setCamera(60,5000);

    //autopilot
    autopilot = new Vadstena.Autopilot(browser, null);

    //mouse events
    document.onmousedown = onMouseDown;
    document.oncontextmenu = (function(){ return false;});
    document.onmouseup = onMouseUp;
    document.onmousemove = onMouseMove;
    window.addEventListener("DOMMouseScroll", onMouseWheel, true);
    window.addEventListener("mousewheel", onMouseWheel, true);
    document.onselectstart = function(){ return false; } //removes text cusor during draging

    //keyboard events
    document.onkeyup = onKeyUp;
    document.onkeypress = onKeyPress;
    document.onkeydown = onKeyDown;
}

//url params are not needed for this tutorial, so you can skip this function
function getParamsFromURL() {
    var queryString_ = {};
    var query_ = window.location.search.substring(1);
    var vars_ = query_.split("&");
    for (var i=0; i < vars_.length; i++) {
        var pair_ = vars_[i].split("=");
        if (typeof queryString_[pair_[0]] === "undefined") {
            queryString_[pair_[0]] = pair_[1];
        } else if (typeof queryString_[pair_[0]] === "string") {
            var arr_ = [ queryString_[pair_[0]], pair_[1] ];
            queryString_[pair_[0]] = arr_;
        } else {
            queryString_[pair_[0]].push(pair_[1]);
        }
    }
    return queryString_;
}

var autorotate = 0;
var lastFrameTime = null;

//once browser is initialized then this function is called
function onBrowserInitialized(success_, message_) {
    if (success_ == false) {
        alert("Map browser initialization failed. Reason: " + message_);
        return;
    }

    //set first location
    flyToLocation(0, true);

    //url params are not needed for this tutorial, you can skip this section
    //url params - begin
    var params = getParamsFromURL();

    var pos = browser.getPosition();
    var rot = browser.getOrientation();

    if (params["x"] != null) { pos[0] = parseInt(params["x"], 10); }
    if (params["y"] != null) { pos[1] = parseInt(params["y"], 10); }
    if (params["d"] != null) { pos[2] = parseInt(params["d"], 10); }
    if (params["rx"] != null) { rot[0] = parseInt(params["rx"], 10); }
    if (params["ry"] != null) { rot[1] = parseInt(params["ry"], 10); }
    if (params["rotate"] != null) { autorotate = parseFloat(params["rotate"]) * 0.001;}
    if (params["controls"] == "0") {
        document.getElementById("compassMain").style.display = "none";
        document.getElementById("plus").style.display = "none";
        document.getElementById("minus").style.display = "none";
    }

    browser.setPosition(pos[0], pos[1], pos[2]);
    browser.setOrientation(rot[0], rot[1], rot[2]);
    //url params - end

    //setup comapss and zaoom buttons events
    document.getElementById("compassMain").onmousedown = onBrowserCompass;
    document.getElementById("plus").onclick = onBrowserZoomIn;
    document.getElementById("minus").onclick = onBrowserZoomOut;

    document.getElementById("compass").ondragstart = (function() { return false; });
    document.getElementById("compass2").ondragstart = (function() { return false; });
    document.getElementById("compass3").ondragstart = (function() { return false; });
    document.getElementById("compassframe").ondragstart = (function() { return false; });
    document.getElementById("compassframe2").ondragstart = (function() { return false; });
    document.getElementById("compassframe3").ondragstart = (function() { return false; });
    document.getElementById("plus").ondragstart = (function() { return false; });
    document.getElementById("minus").ondragstart = (function() { return false; });

    //hide stats panel
    document.getElementById("renderStats").style.display = "none";

    //link and info panel will ignore mouse dragging
    document.getElementById("linkPanel").onmousedown = (function() { ignoreMove = true; });
    document.getElementById("infoPanel").onmousedown = (function() { ignoreMove = true; });

    //store time for autorotation
    var time = (new Date()).getTime();
    lastFrameTime = time;
}

//called when map is updated
function onBrowserUpdate() {

    //update compass orientation
    var compass = document.getElementById("compass");
    var compass2 = document.getElementById("compass2");
    var compass3 = document.getElementById("compass3");
    var orientation = browser.getOrientation();

    var value = "rotateX("+((orientation[1]+90)*0.7)+"deg) " + "rotateZ("+(orientation[0]-45)+"deg)";

    if (compass != null && compass2 != null && compass3 != null) {
        compass.style.transform = value;
        compass.style.webkitTransform = value;
        compass.style.msTransform = value;

        compass2.style.transform = value;
        compass2.style.webkitTransform = value;
        compass2.style.msTransform = value;

        compass3.style.transform = value;
        compass3.style.webkitTransform = value;
        compass3.style.msTransform = value;
    }

    //update autorotation
    var time = (new Date()).getTime();

    if (autorotate != 0 && browser != null) {

        var o = browser.getOrientation();

        o[0] = (o[0] + (time - lastFrameTime) * autorotate) % 360;

        browser.setOrientation(o[0], o[1], o[2]);

        //call again
        window.setTimeout(onBrowserUpdate, 1000 / 60);
    }

    lastFrameTime = time;
}

var compassMove = false;
var compassFirst = false;
var compassAngle = 0;
var ignoreMove = false;

//called when compass is dragged
function onBrowserCompass() {
    compassMove = true;
    compassFirst = false;
}

//called when zoom in button is pressed
function onBrowserZoomIn() {

    if (browser == null){
        return;
    }

    setTimeout(function(){ browser.zoom(-5); setTimeout(function(){ browser.zoom(-10); setTimeout(function(){ browser.zoom(-10); setTimeout(function(){ browser.zoom(-10); setTimeout(function(){ browser.zoom(-10); setTimeout(function(){ browser.zoom(-10); },60); },60);},60); },60); },60); },60);

}

//called when zoom out button is pressed
function onBrowserZoomOut() {

    if (browser == null){
        return;
    }

    setTimeout(function(){ browser.zoom(5); setTimeout(function(){ browser.zoom(10); setTimeout(function(){ browser.zoom(10); setTimeout(function(){ browser.zoom(10); setTimeout(function(){ browser.zoom(10); setTimeout(function(){ browser.zoom(10); },60); },60);},60); },60); },60); },60);
}

//called when Shift+L is pressed
function showLinkPanel() {

    if (browser == null){
        return;
    }

    //display link panel
    document.getElementById("linkPanel").style.display = "block";

    //fill in params
    var pos = browser.getPosition();
    var rot = browser.getOrientation();
    var link_ = "";
    link_ += "x=" + Math.round(pos[0]) + "&";
    link_ += "y=" + Math.round(pos[1]) + "&";
    link_ += "d=" + Math.round(pos[2]) + "&";
    link_ += "rx=" + Math.round(rot[0]) + "&";
    link_ += "ry=" + Math.round(rot[1]);

    document.getElementById("linkPanelText").innerHTML = link_;
}

function hideLinkPanel() {
    //hide link panel
    document.getElementById("linkPanel").style.display = "none";
}

//called when Shift+S is pressed
function switchStatsPanel() {
    if(document.getElementById("renderStats").style.display != "none") {
        //hide stats panel
        document.getElementById("renderStats").style.display = "none";
    } else {
        //show stats panel
        document.getElementById("renderStats").style.display = "block";
    }
}

//keyboard events
var altDown = false;
var ctrlDown = false;
var shiftDown = false;

//mouse events
var mouseRightDown = false;
var mouseLeftDown = false;

var mouseLX = 0;
var mouseLY = 0;
var mouseX = 0;
var mouseY = 0;
var mouseDX = 0;
var mouseDY = 0;

//called when mouse button is pressed
function onMouseDown(event)
{
    var right = false;
    var e = event || window.event;

    if (e.which) { // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
        right = e.which == 3;
    } else if (e.button) { // IE, Opera
        right = e.button == 2;
    }

    if (right == true) {
        mouseRightDown = true;
    } else {
        mouseLeftDown = true;
    }

    altDown = e.altKey;
    ctrlDown = e.ctrlKey;
    shiftDown = e.shiftKey;
}

//called when mouse button is released
function onMouseUp(event)
{
    var right = false;
    var e = event || window.event;

    if (e.which) { // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
        right = e.which == 3;
    } else if (e.button) { // IE, Opera
        right = e.button == 2;
    }

    if (right == true) {
        mouseRightDown = false;
    } else {
        mouseLeftDown = false;
    }

    compassMove = false;
    ignoreMove = false;
}

//called when mouse moves
function onMouseMove(event)
{
    var newX = event.clientX;
    var newY = event.clientY;

    mouseDX = (newX - mouseX);
    mouseDY = (newY - mouseY);

    mouseLX = mouseX;
    mouseLY = mouseY;
    mouseX = newX;
    mouseY = newY;

    var panFactor = 0.5;
    var rotateFactor = 0.4;

    if (ignoreMove == true) {
        return;
    }

    if (compassMove == true) {

        browser.rotate(mouseDX*rotateFactor*2, mouseDY*rotateFactor*2);
        autorotate = 0;

    } else {

        // handle position change
        if (mouseLeftDown == true && !(altDown == true || ctrlDown == true || shiftDown == true)) {
            browser.pan(mouseDX*panFactor, mouseDY*panFactor);
            autorotate = 0;
        }

        // handle orientation change
        if (mouseRightDown == true || (mouseLeftDown == true && (altDown == true || ctrlDown == true || shiftDown == true))) {
            browser.rotate(mouseDX*rotateFactor, mouseDY*rotateFactor);
            autorotate = 0;
        }

    }
}

//called when mouse wheel is scrolled
function onMouseWheel(event)
{
    if (event.preventDefault) {
        event.preventDefault();
    }

    event.returnValue = false;

    var delta = 0;
    var w = event.wheelDelta
    var d = event.detail;

    if (d) {
        if (w) delta = w/d/40*(d>=0?1:-1); // Opera
        else delta = -d/3;                 // Firefox;         TO_DO: do not /3 for OS X
    } else {
        delta = w/120;                     // IE/Safari/Chrome TO_DO: /3 for Chrome OS X
    }

    if (isNaN(delta) == true) {
        delta = 0;
    }

    var zoomFactor = 0.35;

    //change camera distance
    delta = (delta<0)?1:-1;

    if (browser.getControlMode() == "observer") {
        browser.zoom(delta*50*zoomFactor);
    } else {
        browser.zoom(delta*20*zoomFactor);
    }
}

//keyboard events
//called when keyboar key is pressed
function onKeyDown(event)
{
    if (typeof event == 'undefined') {
        event = window.event;
    }

    altDown = event.altKey;
    ctrlDown = event.ctrlKey;
    shiftDown = event.shiftKey;

    onKeyUp(event, true);
}

function onKeyPress(event)
{
    onKeyUp(event, true);
}

//called when keyboar key is released
function onKeyUp(event, press_)
{
    if (typeof event == 'undefined') {
        event = window.event;
    }

    if (event) {
        var keyCode_;

        if (window.event) {         // eg. IE
            keyCode_ = window.event.keyCode;
        } else if (event.which) {   // eg. Firefox
            keyCode_ = event.which;
        } else {
            keyCode_ = event.charCode;
        }

        /*
        switch(keyCode_) {
            //...
        }
        */

        if (shiftDown == true && press_ != true) {
            switch(keyCode_) {
                case 76:
                case 108:
                    showLinkPanel();  break;  //key L pressed

                case 83:
                case 115:
                    switchStatsPanel(); break; //key S pressed
            }
        }

        //console.log("key" + keyCode);
    }

    altDown = event.altKey;
    ctrlDown = event.ctrlKey;
    shiftDown = event.shiftKey;
}

