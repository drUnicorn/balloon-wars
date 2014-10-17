
//autopilot is used to fly from one location to another
Vadstena.Autopilot = function(browser, finishCall) {

    this.browser = browser;

    this.source = {
        position : [0,0,0],
        orientation : [0,0,0]
    }

    this.destination = {
        position : [0,0,0],
        orientation : [0,0,0]
    }

    this.position = [0,0,0];
    this.orientation = [0,0,0];
    this.lastOrientation = [0,0,0];

    this.mode = "direct";
    this.timeStart = 0;
    this.timeTotal = 0;
    this.finished = true;
    this.finishCall = finishCall;
}

//set where flight starts
Vadstena.Autopilot.prototype.setSource = function(position, orientation) {

    orientation[0] = orientation[0] % 360;

    this.position = position;
    this.orientation = orientation;

    this.source = {
        position : this.position,
        orientation : this.orientation
    }

}

//set flight destination
Vadstena.Autopilot.prototype.setDestination = function(position, orientation, direct_) {

    if (direct_) {
        this.position = position;
        this.orientation = orientation;
    }

    this.source = {
        position : this.position,
        orientation : this.orientation
    }

    this.destination = {
        position : position,
        orientation : orientation
    }

    if (direct_) {

        //just set postion and orientation
        this.finished = true;
        this.browser.setPosition(this.position[0], this.position[1], this.position[2]);
        this.browser.setOrientation(this.orientation[0], this.orientation[1], this.orientation[2]);

    } else {

        var dx = this.destination.position[0] - this.source.position[0];
        var dy = this.destination.position[1] - this.source.position[1];
        var distance_ = Math.sqrt(dx*dx + dy*dy);

        // fly mode is determined by distance
        // there are two fly modes: "direct" and "fly"
        //
        // "direct" mode just interpolated bettween start and end position/orientation
        //
        // "fly" mode has three phases:
        //  during first phase camera turns to the ground and rotate in to the flight direction
        //  second phase is flying
        //  during third phase camera rotates into final direction/tilt

        //determine fly mode
        if (distance_ < 2000) {
            this.timeTotal = 2000;
            this.mode = "direct";
        } else {

            //determine total flight time
            this.mode = "fly";
            this.timeTotal = distance_ / 100;

            if (this.timeTotal < 300) {
                 this.timeTotal = 3000;
            }

            else if (this.timeTotal < 6000) {
                 this.timeTotal = 6000;
            }

            if (this.timeTotal > 10000) {
                 this.timeTotal = 10000;
            }

            this.timeTotal *= 1.8;
        }

        //store time at begining of the flight
        this.timeStart = (new Date()).getTime();

        this.finished = false;
        this.tick();
    }
}

//this finction update flight
Vadstena.Autopilot.prototype.tick = function() {

    if (this.finished == true) {
        return;
    }

    //get current time
    var time = (new Date()).getTime() - this.timeStart;

    //if flight duration is over then finish the flight
    if (time >= this.timeTotal) {

        var cw = this.orientation[0] > this.lastOrientation[0];

       this.position[0] = this.destination.position[0];
       this.position[1] = this.destination.position[1];
       this.position[2] = this.destination.position[2];

       this.orientation[0] = this.destination.orientation[0];
       this.orientation[1] = this.destination.orientation[1];
       this.orientation[2] = this.destination.orientation[2];

        var pos = this.position, rot = this.orientation;

        this.browser.setPosition(this.position[0], this.position[1], this.position[2]);
        this.browser.setOrientation(this.orientation[0], this.orientation[1], this.orientation[2]);

        this.browser.renderer_.motion_ = 1.0;

        if (this.finishCall != null) {
            this.finishCall(cw);
        }

       return;
    }


    switch(this.mode) {

        case "direct":

            var factor = time / this.timeTotal;

            //blend position
            var sp1_ = this.source.position;
            var sp2_ = this.destination.position;

            this.position = [ sp1_[0] + (sp2_[0] - sp1_[0]) * factor,
                               sp1_[1] + (sp2_[1] - sp1_[1]) * factor,
                               sp1_[2] + (sp2_[2] - sp1_[2]) * factor ];

            //blend orientation
            var so1 = this.source.orientation;
            var so2 = this.destination.orientation;

            var od1 = so2[0] - so1[0];
            var od2 = so2[1] - so1[1];
            var od3 = so2[2] - so1[2];

            if (Math.abs(od1) > 180) {
                if (od1 > 0) {
                    od1 = -(360 - od1);
                } else {
                    od1 = 360 - Math.abs(od1);
                }
            }

            this.lastOrientation = this.orientation;
            this.orientation = [ so1[0] + od1 * factor,
                                  so1[1] + od2 * factor,
                                  so1[2] + od3 * factor];

            break;

        case "fly":

            var sequenceLength = 1500 * 1.8;
            var factor = time / this.timeTotal;


            var x = factor;

            //http://en.wikipedia.org/wiki/Smoothstep
            /*
            factor = x*x*x*(x*(x*6 - 15) + 10);
            x = factor;
            factor = x*x*x*(x*(x*6 - 15) + 10);
            */

            //use smoothset to slow fly at start and end
            factor =  x*x*(3 - 2*x);
            x = factor;
            factor =  x*x*(3 - 2*x);

            //blend position
            var sp1_ = this.source.position;
            var sp2_ = this.destination.position;

            var dx = this.destination.position[0] - this.source.position[0];
            var dy = this.destination.position[1] - this.source.position[1];
            var distance_ = Math.sqrt(dx*dx + dy*dy);

            //store new position
            this.position = [ sp1_[0] + (sp2_[0] - sp1_[0]) * factor,
                               sp1_[1] + (sp2_[1] - sp1_[1]) * factor,
                               sp1_[2] + (sp2_[2] - sp1_[2]) * factor + Math.sin(Math.PI * factor)*(Math.min(280000,distance_*0.5))];

            this.position[2] = Math.min(480000, this.position[2]);

            //blend orientation
            var so1 = null;
            var so2 = null;
            var fo = [ 0, -90, 0]; //flight orientation

            //get fly direction angle
            fo[0] = Math.atan2((sp2_[1] - sp1_[1]), (sp2_[0] - sp1_[0])) * (180/Math.PI) - 90;

            //detect flight phase
            if (time <= sequenceLength) { //start sequence

                factor = time / sequenceLength;

                so1 = this.source.orientation;
                so2 = fo;

            } else if (time >= this.timeTotal - sequenceLength) { //end sequence

                factor = (time - (this.timeTotal - sequenceLength)) / sequenceLength;

                so1 = fo;
                so2 = this.destination.orientation;

            } else { //fly sequence

                factor = 0;

                so1 = fo;
                so2 = fo;
            }

            var od1 = so2[0] - so1[0];
            var od2 = so2[1] - so1[1];
            var od3 = so2[2] - so1[2];

            if (Math.abs(od1) > 180) {
                if (od1 > 0) {
                    od1 = -(360 - od1);
                } else {
                    od1 = 360 - Math.abs(od1);
                }
            }

            //store new orientation
            this.lastOrientation = this.orientation;
            this.orientation = [ so1[0] + od1 * factor,
                                  so1[1] + od2 * factor,
                                  so1[2] + od3 * factor];

            break;
    }

    //apply new position and orintation
    this.browser.setPosition(this.position[0], this.position[1], this.position[2]);
    this.browser.setOrientation(this.orientation[0], this.orientation[1], this.orientation[2]);

    //call again after 1/60 sec
    window.setTimeout(this.tick.bind(this), 1000 / 60);
}
