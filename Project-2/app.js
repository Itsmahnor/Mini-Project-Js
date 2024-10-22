
// let Calculate=()=>{
//     let Height_cm=parseFloat(document.getElementById("height").value);
// let weight=parseFloat(document.getElementById("weight").value);
// let Result=document.getElementById("results");

//     let Height_m=Height_cm/100;


//     if(Height_cm <= 0 || weight <=0){
//         Result.innerText="Enter Valid Height and Weight";
//     }

//     let BMI=weight/(Height_m*Height_m);

//     if(BMI<18.6){
//        Result.innerText="Under Weight";
//     }
//     else if(BMI >= 18.6 && BMI <=24.9){
//         Result.innerText="Normal Weight";
//     }
//     else if(BMI > 24.9){
//         Result.innerText="OverWeight";
//     }
  
// }

// document.getElementById("mybutton").onclick=Calculate;

document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("button");
    let Result = document.querySelector("#results");
    let form = document.querySelector("#myform");

    button.addEventListener("click", (event) => {
        event.preventDefault();

        let Height_cm = parseFloat(document.querySelector("#height").value);
        let weight = parseFloat(document.querySelector("#weight").value);

        if (isNaN(Height_cm) || isNaN(weight) || Height_cm <= 0 || weight <= 0) {
            Result.innerText = "Enter Valid Height and Weight";
            return; 
        }

        let Height_m = Height_cm / 100;
        let BMI = weight / (Height_m * Height_m);

        if (BMI < 18.6) {
            Result.innerText = "Under Weight";
        } else if (BMI >= 18.6 && BMI <= 24.9) {
            Result.innerText = "Normal Weight";
        } else if (BMI > 24.9) {
            Result.innerText = "OverWeight";
        }
    });
});
