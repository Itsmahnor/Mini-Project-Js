let Remaining=document.querySelector(".lastResult");
let Re = parseInt(Remaining.innerText, 10);
let Prev=document.querySelector(".guesses");
let Result=document.querySelector(".lowOrHi");
let arr=[];
let Final=false;
// generate Random Value
let Guess=Math.floor(Math.random()*100);
console.log(Guess);



let FindGuess=()=>{
  let User_Guess=parseInt(document.querySelector("#guessField").value,);
  if(User_Guess===Guess){
    Result.innerText="Correct! You Won!";
    arr.push(User_Guess);
    if(Re!=0){
      Prev.innerText=arr;
      Final=true;
    }
  }
  else if(User_Guess > Guess){
    if(!Final){
      Result.innerText="Value is High! ";
      arr.push(User_Guess);
      if(Re!=0){
        Prev.innerText=arr;
      }
    }
  
  }
  else{
    if(!Final){
      Result.innerText="Value is Low! ";
      arr.push(User_Guess);
      if(Re!=0 ){
        Prev.innerText=arr;
      }
    }
  }
  if(Re!=0 && !Final){
    Re--;
    console.log(Re);
    Remaining.innerText=`${Re}`;
  }
  if(Re==0){
    Result.innerText=`You Lose! Number is ${Guess}`;
  } 
}



document.querySelector("form").addEventListener("submit",(event)=>{
event.preventDefault();
FindGuess();
})