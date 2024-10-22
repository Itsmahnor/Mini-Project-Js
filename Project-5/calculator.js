document.addEventListener("DOMContentLoaded", () => {
    let show = document.querySelector("#Show");
    let buttons = document.querySelectorAll(".buttons");
    let Equal = document.querySelector("#equal");
    
    let Value = '';
    let Final = false;
   

    const resultFinal=(value)=>{
        let Result=eval(value);
        show.innerText=Result;
    }

    const ShowDiv = (value) => {  
      show.innerText = value;
           if(Final){
            resultFinal(value);
           } }
    

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let Tex = button.innerText;
            if (Tex !== '=' && Tex !== 'c') {
                Value += Tex;
                ShowDiv(Value);
                console.log("value is:",Value);
            } 
            else if (Tex === '=') {
                Final = true;
            } else if (Tex === 'c' && !Final) {
                Value = '';   
            }
            else if(Tex === 'c' && Final){
               Value=0;
            }
            ShowDiv(Value);
        });

    });
    
    cross.addEventListener("click", () => {
        // remove last digit
        if(!Final){
            Value = Value.slice(0, -1);
           
        }
        else{
            Value = 0;   
        }
        ShowDiv(Value);
    });
});


// let top = -1;
    // let stack = [];

    // const Pushvalue = (value) => {
    //     stack[++top] = value;
    // }

    // const PopValue = () => {
    //     return stack[top--];
    // }

    // const Peak = () => {
    //     return stack[top];
    // }

    // // Determines if operator a has precedence over operator b
    // const checkchar = (a, b) => {
        
        
    //     const precedence = {
    //         '+': 1,
    //         '-': 1,
    //         '*': 2,
    //         '/': 2,
    //         '%': 2
    //     };
        
    //     return precedence[a] >= precedence[b];
    // }

    // const infixToPostfix = (arr) => {
    //     console.log(arr);
    //     let Resultarr = [];
    //     for (let i of arr) {
    //         if (!isNaN(i)) {
    //             Resultarr.push(i);
    //         }  else {  
    //             while (top !== -1 && checkchar(stack[top], i)) {
    //                 Resultarr.push(PopValue());  
    //             }
    //             Pushvalue(i);
    //         }
    //     }
       
    //     while (top !== -1) {
    //         Resultarr.push(PopValue());
    //     }
    //     return Resultarr;
    // }

    // const calculatePostfix = (postfix) => {
    //     let stack = [];
    //     postfix.forEach(token => {
    //         if (['+', '-', '*', '/', '%'].includes(token)) {
    //             let b = stack.pop();
    //             let a = stack.pop();
    //             if (isNaN(a) || isNaN(b)) {
    //                 stack.push('Error'); // Handle invalid expression
    //                 return;
    //             }
    //             switch (token) {
    //                 case '+': stack.push(a + b); break;
    //                 case '-': stack.push(a - b); break;
    //                 case '*': stack.push(a * b); break;
    //                 case '/':
    //                     if (b === 0) {
    //                         stack.push('Error'); // Handle division by zero
    //                     } else {
    //                         stack.push(a / b);
    //                     }
    //                     break;
    //                 case '%': stack.push(a % b); break;
    //             }
    //         } else {
    //             stack.push(parseFloat(token));
    //         }
    //     });
    //     if (stack.length !== 1) {
    //         return 'Error'; // Handle invalid result
    //     }
    //     return stack[0];
    // }