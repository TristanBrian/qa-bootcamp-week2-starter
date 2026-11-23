// Union types allow a variable to hold more than one type

let testResult: string | number;

testResult = "Passed";
console.log("Test result:", testResult);

testResult = 200;
console.log("HTTP status:", testResult);

function displayResult(result: string | number): void {
    console.log("Result:", result);
}

displayResult("Failed");
displayResult(404);
