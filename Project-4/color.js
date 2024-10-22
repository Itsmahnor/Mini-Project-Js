let Start=document.querySelector("#start");
let Stop=document.querySelector("#stop");

let Intervel;
let ChangeColor = () =>{
    let Random_Number=Math.floor(Math.random()*10);
    console.log(Random_Number);

switch(Random_Number){
    case 0:{
        document.body.style.backgroundColor="red";
        break;
    }
    case 1:{
        document.body.style.backgroundColor="green";
        break;
    }
    case 2:{
        document.body.style.backgroundColor="blue";
        break;
    }
    case 3:{
        document.body.style.backgroundColor="yellow";
        break;
    }
    case 4:{
        document.body.style.backgroundColor="orange";
        break;
    }
    case 5:{
        document.body.style.backgroundColor="gray";
        break;
    }
    case 6:{
        document.body.style.backgroundColor="black";
        break;
    }
    case 7:{
        document.body.style.backgroundColor="purple";
        break;
    }
    case 8:{
        document.body.style.backgroundColor="pink";
        break;
    }
    case 9:{
        document.body.style.backgroundColor="#36802d";
        break;
    }

    case 10:{
        document.body.style.backgroundColor="#f0f7da";
        break;
    }
}
}
let set=()=>{
    Intervel=setInterval(ChangeColor,1000);
}


Start.addEventListener("click",()=>{
    clearInterval(Intervel);
    ChangeColor();
});

Stop.addEventListener("click",()=>{
    clearInterval(Intervel);
});

set();