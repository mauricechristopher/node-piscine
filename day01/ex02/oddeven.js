var readline = require('readline');
var log = console.log;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var recursiveAsyncReadLine = function () {
    rl.question('Enter a number: ', (answer) => {
        if (answer % 2 == 0) {
            console.log("The number", answer, "is even");
        }

        else if (answer % 2 == 1) {
            console.log("The number", answer, "is odd");
        }
        else 
            console.log(answer, "Is not a number");
        recursiveAsyncReadLine();
    });
};

recursiveAsyncReadLine();