// Grab each element of the timer
const digits = document.querySelector(".digits");
const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");
const msOnes = document.getElementById("msOnes");

timer();

function timer () {
    initialize ()

    // Create function to initialize timer
    function initialize () {
        let ms = 0;
        secondTens.innerHTML = "0";
        secondOnes.innerHTML = "0";
        msHundreds.innerHTML = "0";
        msTens.innerHTML = "0";
        
        // Set interval for updating timer by 10ms, checking every 10ms
        const timerInterval = window.setInterval(() => {
        ms += 10;
        if (ms === 10000) {
            endTimer(timerInterval); 
        }
        updateTimer(ms);
        }, 10);
    }

    // Create function to increase each digit by 1
    function increment (string) {
        let number = Number(string) + 1;
        return number.toString();
    }

    // Create function to stop the timer at 10 seconds and change digits to red
    function endTimer (intervalId) {
        clearInterval(intervalId);
        Array.from(digits.children).forEach(digit => {
          digit.classList.add("redDigit");
        })
    }

    // Create function to update the digits on the timer
    function updateTimer (ms) {
        // at 10 seconds (tens place)
        if (ms === 10000) {
          secondTens.innerHTML = "1";
          secondOnes.innerHTML = "0";
          msHundreds.innerHTML = "0";
          msTens.innerHTML = "0";
        } 
        // each second (ones place)
        else if (ms % 1000 === 0) {
          secondOnes.innerHTML = increment(secondOnes.innerHTML);
          msHundreds.innerHTML = "0";
          msTens.innerHTML = "0";
        } 
        // every 100 milliseconds (hundreds place)
        else if (ms % 100 === 0) {
          msHundreds.innerHTML = increment(msHundreds.innerHTML);
          msTens.innerHTML = "0";
        } 
        // every 10 milliseconds (tens place)
        else {
          msTens.innerHTML = increment(msTens.innerHTML);
        }
    }




}

