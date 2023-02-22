const btns = document.querySelectorAll(".button");
const screen = document.querySelector(".Result");

let firstNumber = "";
let secondNumber = "";
let operation = "";

btns.forEach((btn)=>[
    btn.addEventListener('click',()=>{
        if(btn.classList.contains("btn-1")){
            screen.textContent += 1;
        }
        else if(btn.classList.contains("btn-2")){
            screen.textContent += 2;
        }
        else if(btn.classList.contains("btn-3")){
            screen.textContent += 3;
        }
        else if(btn.classList.contains("btn-4")){
            screen.textContent += 4;
        }
        else if(btn.classList.contains("btn-5")){
            screen.textContent += 5;
        }
        else if(btn.classList.contains("btn-6")){
            screen.textContent += 6;
        }
        else if(btn.classList.contains("btn-7")){
            screen.textContent += 7;
        }
        else if(btn.classList.contains("btn-8")){
            screen.textContent += 8;
        }
        else if(btn.classList.contains("btn-9")){
            screen.textContent += 9;
        }
        else if(btn.classList.contains("btn-0")){
            screen.textContent += 0;
        }
        else if(btn.classList.contains("btn-plus")){
            firstNumber = screen.textContent;
            operation = "+";
            screen.textContent = "";
        }
        else if(btn.classList.contains("btn-equal")){
            secondNumber = screen.textContent;
            let result = 0
            if(operation === "+"){
                screen.textContent =  Number(firstNumber) + Number(secondNumber);
            }
            else if(operation === "-"){
                screen.textContent = Number(firstNumber) - Number(secondNumber);
            }
            else if(operation === "*"){
                screen.textContent = Number(secondNumber) * Number(firstNumber);
            }
            else if(operation === "/"){
                screen.textContent = Number(firstNumber) / Number(secondNumber);
            }
        }
        else if(btn.classList.contains("btn-minus")){
            firstNumber = screen.textContent;
            screen.textContent = '';
            operation = "-";
        }
        else if(btn.classList.contains("btn-Mult")){
            firstNumber = screen.textContent;
            screen.textContent = '';
            operation = "*";
        }
        else if(btn.classList.contains("btn-divide")){
            firstNumber = screen.textContent;
            screen.textContent = '';
            operation = "/";
        }
        else if(btn.classList.contains("btn-dot")){
            screen.textContent += '.';
        }
        else{
            firstNumber = "";
            secondNumber = "";
            operation = "";
            screen.textContent = '';
        }
    })
])
















