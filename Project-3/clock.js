let Time=document.querySelector("#clock");
let Clock=()=>{
    const date = new Date();

    const D1 = date.toLocaleTimeString(); 
    
    Time.innerText = D1;
}
setInterval(Clock,1000);


// function updateClock() {
//     const now = new Date();
//     const timeStr = now.toLocaleTimeString(); // Get the current time as HH:MM:SS
//     document.getElementById("clock").innerText = timeStr;
//   }

//   setInterval(updateClock, 1000); // Update the clock every on every second
//   updateClock();