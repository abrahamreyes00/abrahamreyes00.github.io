//Start and stop buttons
//JavaScript function to enable/disable the Start button.
function start() {
    console.log("start button pushed");
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);

    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
//JavaScript function to enable/disable the Stop button.
function stop() {
    clearInterval(timer);
    console.log("stop button pushed");
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}

function playstation() {
    console.log("Playstation() started");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);

    this.play = function () {
        this.sound.play();
    }

    this.stop = function () {
        this.sound.pause();
    }
}

//Better countdown timer with loops
function btrCountdownTimer() {
    var count = 10;
    //"i = i + 1" does the samething as i++ just longer code; the variable "i" is equal to zero and less than 10.
    //Using the i++ adds 1 to "i" otherwise known as 0. 
    for (var i = 0; i < 10; i++) {
        setTimeout(function () {
            //Starts a counter by adding 1 to "i" every 1000 miliseconds
            document.getElementById("countdownTimer").innerHTML = count;
            count = count - 1;
        }, 1000 * i);
    }
    //Once the 10000 timer is reached blast off is printed
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = "Blast Off!!!";
    }, 10000);
}

//As requested by the fleet admiral we will go to Warning Less than 1/2 way to launch, time left = at 5 seconds
function evenBtrCountdownTimer() {
    var count = 10;

    for (var i = 0; i < 11; i++) {
        if (i == 10) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "Blast Off!!!";
            }, i * 1000);
        } else if (i > 4) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "Warning Less than 1/2 way to launch, time left = " + count;
                count--;
            }, i * 1000);
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = count;
                count--;
            }, i * 1000);

        }

    }

}
function dataRow(legend, value, units) {
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

function getData() {
    var loadedData = loadData();
    return loadedData;
}

class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,
    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

function IndexTrans(){
    location.replace("index.html");
}

function ObjectivesTrans(){
    location.replace("objectives.html");
}
//This is old code
//Countdown Timer for webpage. Will begin at 10 and end at 1 with Blast Off following
//function startCountdown() {
    //var count = 10;

    //document.getElementById("countdownTimer").innerHTML = count;
    //count = count - 1;
    //Sets a timer to run code based off milliseconds
    //setTimeout(function () {
        //after 1 sec, will run code in here
        //document.getElementById("countdownTimer").innerHTML = count;
        //Decreases count by one
        //count = count - 1;
        //Waits  1 second before displaying results
    //}, 1000);

    //setTimeout(function () {
        //after 1 sec, will run code in here
        //document.getElementById("countdownTimer").innerHTML = count;
        //count = count - 1;
        //Waits  2 second before displaying results
    //}, 2000);

    //setTimeout(function () {
        //after 1 sec, will run code in here
        //document.getElementById("countdownTimer").innerHTML = count;
        //count = count - 1;
        //Waits  3 second before displaying results
    //}, 3000);

    //setTimeout(function () {
        //after 1 sec, will run code in here
        //document.getElementById("countdownTimer").innerHTML = count;
        //count = count - 1;
        //Waits  4 second before displaying results
    //}, 4000);

    //setTimeout(function () {
        //after 1 sec, will run code in here
        //document.getElementById("countdownTimer").innerHTML = count;
        //count = count - 1;
        //Waits  5 second before displaying results
   // }, 5000);

    //setTimeout(function () {
        //after 1 sec, will run code in here
        //document.getElementById("countdownTimer").innerHTML = count;
        //count = count - 1;
        //Waits  6 second before displaying results
    //}, 6000);

    //setTimeout(function () {
        //after 1 sec, will run code in here
        //document.getElementById("countdownTimer").innerHTML = count;
        //count = count - 1;
        //Waits  7 second before displaying results
    //}, 7000);

    //setTimeout(function () {
        //after 1 sec, will run code in here
        //document.getElementById("countdownTimer").innerHTML = count;
        //count = count - 1;
        //Waits  8 second before displaying results
    //}, 8000);

   //setTimeout(function () {
        //after 1 sec, will run code in here
        //document.getElementById("countdownTimer").innerHTML = count;
        //count = count - 1;
        //Waits  9 second before displaying results
    //}, 9000);

    //setTimeout(function () {
        //after 1 sec, will print "Blast Off!!!"
       // document.getElementById("countdownTimer").innerHTML = "Blast Off!!!";
        //Waits  10 seconds before displaying results
   // }, 10000);
//}
//Playing craps is no longer needed for assignment
//Function to play craps
//function PlayCraps() {
    //console.log("PlayCraps has started");
    //Creates die1, ensures a random number between 1 and 6 is displayed and rounded up then prints the results
    //var die1;
    //die1 = Math.ceil(Math.random() * 6);
    //console.log("The value of die1 is: " + die1);
    //document.getElementById("die1results").innerHTML = "The value of die1 is: " + die1;
    //Creates die2, ensures a random number between 1 and 6 is displayed and rounded up then prints the results
    //var die2;
    //die2 = Math.ceil(Math.random() * 6);
   //console.log("The value of die2 is: " + die2);
    //document.getElementById("die2results").innerHTML = "The value of die2 is: " + die2;
    //Thh variable diesum is used to add die1 and die2 then displays the combined results of die1 and die2 
    //var diesum = die1 + die2;
    //document.getElementById("sumresults").innerHTML = "The sum of die1 plus die2 is: " + diesum;
    //if (diesum == 7 || diesum == 11) {
        //If the diesum is 7 or 11, Craps! You lose!!! will be printed
        //document.getElementById("crapsresults").innerHTML = "Craps! You lose!!!";
        //die1 == die2 is a test for doubles, die1 % 2 == 0 is a test for evens
    //} else if (die1 == die2 && die1 % 2 == 0) {
        //If die1 equals die2 and they are an even number, Hurray!! Doubles! You win!! is printed
        //document.getElementById("crapsresults").innerHTML = "Hurray!! Doubles! You win!!";
   // } else {
        //If the numbers dont equal 7 or 11 and you have not rolled even doubles, Play again until you win! is printed
        //document.getElementById("crapsresults").innerHTML = "Play again until you win!";
  //}
//}
