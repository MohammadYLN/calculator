const defultResult = 0;
const currentResult = 0;
let logEntries = [] ;

function parseInput(){
    return parseInt(userInput.value);
}




function createAndWriteOutput(operator,beforeResult,calcNum){
    const calcDesc = `${beforeResult} ${operator} ${calcNum}`;
    outputResult(currentResult,calcDesc); 
}

function calculateResult(calculationType){
    const enteredNum = parseInt();
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType !== 'AND' && calculationType !== 'DIVIDE'
        && calculationType !== 'SUBTRACT' && calculationType !== 'MULTIPLY'
        || !enteredNum){
            return;
        }
        if (calculationType === 'AND'){
            currentResult += enteredNum;
            mathOperator = "+";
        }
        else if (calculationType === 'SUBTRACT'){
            currentResult -= enteredNum;
            mathOperator = "-";
        }
        else if (calculationType === 'DIVIDE'){
            currentResult /= enteredNum;
            mathOperator = "/";
        }
        else if (calculationType === 'MULTIPLY'){
            currentResult *= enteredNum;
            mathOperator = "*";
        }
}

function createAndPushLog(operator,number,prevResult){
    logEntry = {
        number,
        operator,
        result : currentResult,
        prevResult
};
 logEntries.push(logEntry);
}

function add(){
    calculateResult('ADD');

}
function multiply(){
    calculateResult('MULTIPLY');
}
function subtract(){
    calculateResult('SUBTRACT');
}
function divide(){
    calculateResult('DIVIDE');
}

addBtn.addEventListener("click",add);
subtractBtn.addEventListener("click",subtract);
divideBtn.addEventListener("click",divide);
multiplyBtn.addEventListener("click",multiply);


