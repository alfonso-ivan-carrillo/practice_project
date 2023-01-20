"use strict";

(function (){


    function StopWatch(){
        this.start = function (){
            let start = new Date();
            return start;
        };
        this.end = function (){
            let stop = new Date();
            let eltime = stop.getSeconds();
            console.log(eltime);
        };

    }

    let watch = new StopWatch();
    watch.start();
    watch.end();

















}());
