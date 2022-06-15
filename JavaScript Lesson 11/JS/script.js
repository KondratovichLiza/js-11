// 1)

// setInterval

function printNumbers(from, to) {
    let firstNumber = from;

    let timerId = setInterval(function() {
        console.log(firstNumber);
        if (firstNumber == to) {
            clearInterval(timerId)
        }
        firstNumber++;
    }, 1000);
}

printNumbers(1, 3);

// setTimeout

function printNumbers(from, to) {
    let firstNumber = from;

    setTimeout(function go() {
        console.log(firstNumber);
        if (firstNumber < to) {
            setTimeout(go, 1000);
        }
        firstNumber++;
    }, 1000);
}

printNumbers(1, 3);





// 2)
let timerId = setInterval(() =>
    console.log("Interval"), 3000);
setTimeout(() => {
    clearInterval(timerId)
    console.log("STOP INTERVAL");
}, 10000);

// 3)
// 1 6 4 5 3

// 4)

let jordan = {
    name: "Michael",
    age: 59,
    showName: function() {
        console.log(`Name: ${this.name}`);
    },

}


let messi = {
    name: "Lionel",
    age: 34,

}

jordan.showName();
jordan.showName.bind(messi)();