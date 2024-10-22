// Select the elements
const hit = document.querySelector("#Hit");
const ele = document.querySelector("#ele");
const buttons = document.querySelectorAll(".box");
const Row = document.querySelector(".Container");
const Final = document.querySelector(".Final");
let timer;
let sec = 10; // Set initial time to 10 seconds for quicker testing

// Show the final screen and hide the game interface
const showFinal = () => {
    Final.classList.add("hide");
    Final.style.display = "flex"; 
    Row.style.display = "none"; 
};

// Start the timer
const startTimer = () => {
    sec = 10;
    ele.innerHTML = "00:10";
    timer = setInterval(() => {
        sec--;
        ele.innerHTML = sec < 10 ? `00:0${sec}` : `00:${sec}`;
        if (sec <= 0) {
            clearInterval(timer);
            showFinal();
        }
    }, 1000);
};

// Check if the random number exists in button elements
const findHint = (random) => {
    return Array.from(buttons).some(button => button.innerText == random);
};

// Check and match hint
const checkHintMatch = () => {
    let random = Math.floor(Math.random() * 30);
    if (findHint(random)) {
        console.log("Hint found: ", random);
        hit.innerText = random;
        findValue(random);
    } else {
        checkHintMatch(); // Recursive call until a match is found
    }
};

// Change button values and initiate hint check
const changeDiv = () => {
    buttons.forEach(button => {
        let random = Math.floor(Math.random() * 30);
        button.innerText = random;
    });
    checkHintMatch();
};

// Add event listeners to buttons
const findValue = (targetValue) => {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.innerText == targetValue) {
                console.log("Found!");
                changeDiv();
            } else {
                console.log("Not Found!");
            }
        });
    });
};

// Initialize game
changeDiv();
startTimer();
