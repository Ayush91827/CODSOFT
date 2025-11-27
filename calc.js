alert("Hello");
const display=document.querySelector('.disp');
let currentInput='0';
let previousoperand=null;
let operation=null;

updateDisplay();

function updateDisplay(){
    display.innerText=currentInput;
}

function clearDisplay(){
    currentInput='0';
    previousoperand=null;
    operation=null;
    updateDisplay();
}

function appendtoDisplay(value){
    if(currentInput==='0'){
        currentInput=value;
    }
    else{
        currentInput+=value;
    }
    updateDisplay();
}

function chooseoperation(op){
    if(currentInput==='0' && op!=='='){
        return;
    }
    if(previousoperand!==null && operation!==null){
        calculate();
    }
    if(currentInput==='Error'){
        previousoperand=null;
        operation=null;
        return;
    }
    previousoperand=parseInt(currentInput);
    operation=op;
    currentInput='0';
    updateDisplay();
}
function calculate(){
    console.log("prev:",previousoperand, "op:",operation, "current:",currentInput);
    const prev=previousoperand;
    const current=parseInt(currentInput);
    if(operation===null || previousoperand===null){
        console.log("bcda");
        return;
    }
    let result;
    switch (operation){
        case '+':
            result=prev+current;
            break;
        case '-':
            result=prev-current;
            break;
        case '*':
            result=prev*current;
            break;
        case '/':
            if(current===0){
                result='Error';
                break;
            }
            result=prev/current;
            break;
        default:
            return;
    }
    if(typeof result==='string'){
        currentInput=result;
    }
    else{
        currentInput=result.toString();
    }
    operation=null;
    previousoperand=null;
    updateDisplay();
}