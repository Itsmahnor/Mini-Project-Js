let num1=document.querySelector("#num1-el");
let num2=document.querySelector("#num2-el");

let n1=0;
let n2=0;
let Update_Value1=(a1)=>{num1.innerText=a1;}
let Update_Value2=(a1)=>{num2.innerText=a1;}
// add functions
let add1=()=>{
  ++n1;
  Update_Value1(n1);
}
let add2=()=>{
  n1+=2;
  Update_Value1(n1);
}
let add3=()=>{
  n1+=3;
  Update_Value1(n1);
}

// plus functions

let plus1=()=>{
  ++n2;
  Update_Value2(n2);
}
let plus2=()=>{
  n2+=2;
  Update_Value2(n2);
}
let plus3=()=>{
  n2+=3;
  Update_Value2(n2);
}