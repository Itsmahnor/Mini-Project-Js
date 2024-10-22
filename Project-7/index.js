let Heading=document.querySelector("#count-el");
let Pre=document.querySelector("#save-el");
let Text=Pre.innerText;
let count=0;
let arr=[];

let increment=()=>{
  count++;
  Heading.innerText=count;
}
function save(){
arr.push(count);
Pre.innerText=`${`${Text} ` +`{${arr}}`}`;
count=0;
Heading.innerText=0;
}