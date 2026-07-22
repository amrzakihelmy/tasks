//1-1
function multiply(n1, n2) {
    return n1*n2;
}

//1-2
function calculate(a, b, operation) {
    return operation(a,b);
}

//1-3
function displayResult(result) {
    console.log(result);
}

//1-4
let result = calculate(4, 5, multiply);
displayResult(result);

///////////////////////////////////////////////////////////////

//2-1
function greetUser() {
    setTimeout(() => {
        console.log("Hello, User!");
    }, 3000);
}


//2-2
function countdown() {
    let count = 10;

    const timer = setInterval(() => {
        console.log(count);

        if (count === 0) {
            clearInterval(timer);
            console.log("Time's up!");
        }

        count--;
    }, 1000);
}


//2-3
function countdown() {
    let count = 10;

    const timer = setInterval(() => {
        console.log(count);
        count--;
    }, 1000);

    setTimeout(() => {
        clearInterval(timer);
        console.log("Countdown stopped!");
    }, 5000);
}

//2-4
let timer = setTimeout(() => {
    console.log("This will be cleared!");
}, 5000);

clearTimeout(timer);







