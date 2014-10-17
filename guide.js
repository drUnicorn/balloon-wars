
var currentMapLocation = 0;

//this function is called when next button is pressed
function nextPressed() {
    if (currentMapLocation < (tourGuideSettings.locations.length-1)) {
        flyToLocation(currentMapLocation+1);
    }
}

//this function is called when previous button is pressed
function previousPressed() {
    if (currentMapLocation > 0) {
        flyToLocation(currentMapLocation-1);
    }

}


function flyToLocation(index, direct) {
    currentMapLocation = index;

    var tourLocation = tourGuideSettings.locations[index];

    //update texts
    document.getElementById("infoPanelText").innerHTML = tourLocation.texts;

    //update page coubter
    document.getElementById("infoPanelButtonCounter").innerHTML = (index+1) + "/" + tourGuideSettings.locations.length;

    //enable buttons
    document.getElementById("infoPanelButtonPrev").className = "button";
    document.getElementById("infoPanelButtonNext").className = "button";

    //disable unnecessary buttons
    if (index <= 0) {
        document.getElementById("infoPanelButtonPrev").className = "buttonDisabled";
    }

    if (index >= tourGuideSettings.locations.length-1) {
        document.getElementById("infoPanelButtonNext").className = "buttonDisabled";
    }

    //get location position and orientation
    var newPosition = [ tourLocation.position.x, tourLocation.position.y, tourLocation.distance];
    var newOrientation = [ tourLocation.orinetation.rx, tourLocation.orinetation.ry, 0];

    //set autorotation
    autorotate = tourLocation.autorotate * 0.001;

    //fly to target location
    if (direct != true) {
        var currentPositon = browser.getPosition();
        var currentOrientation = browser.getOrientation();

        //set start and end location
        autopilot.setSource(currentPositon, currentOrientation);
        autopilot.setDestination(newPosition, newOrientation, null);

    } else {
        //jump directly to target loction
        autopilot.setDestination(newPosition, newOrientation, true);
    }
}
