"use strict";

(function (){

    let count = 0;
    let max = 10;
    let interval = 1000;



    var time = setInterval(function (){
        if(count >= max){
            clearInterval(time);
        } else {
            count++;
            console.log(count);
        }
    }, interval);

    function startUp(){
        let startTimer = Date.now();
        console.log(startTimer);
        return(startTimer);
    };

    function endUp(){
        let endTimer = Date.now();
        console.log(endTimer);
        return endTimer;
    }

    function elapsedTime(){
        let start = startWatch.value;
        console.log(start);
        let end = endUp();
        let el = end - start;
        console.log(el);
        return(el);
    }



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



//todo  grab elements code
    var startWatch = document.getElementById('startWatch');
    var stopWatch = document.getElementById('stopWatch');
    var elpasedTime = document.getElementById('elapsedTime');
    var timeTester = document.getElementById('timeTest');


    // startWatch.addEventListener('click', startUp);
    stopWatch.addEventListener('click', endUp);
    elpasedTime.addEventListener('click', elapsedTime);
    timeTester.addEventListener('click', function (){
        return(clearInterval(time));
    })




    function Watch(){
        let startTime = 0;
        let endTime = 0;
        let running = false;
        let duration = 0;

        this.start = function (){
            if(running) {
                throw new Error("Watch has already started");
                running = true;
                startTime = new Date();
            }
        };
        this.stop = function (){
            if(!running){
                throw new Error("Watch has already stopped");
                running = false;
                endTime = new Date();
                const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
                duration += seconds;
            }
        };
        this.reset = function (){
            startTime = 0;
            endTime = 0;
            running = false;
            duration = 0;
        };

        Object.defineProperty(this, 'duration', {
            get: function (){
                return duration;
            }
        });

        const sw = new Watch();
    }









}());
