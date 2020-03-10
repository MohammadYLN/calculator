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

function createAndPushLog(operator,number,prevResult){
    logEntry = {
        number,
        operator,
        result = currentResult,
        prevResult
};
 logEntries.push(logEntry);
}


