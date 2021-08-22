const index = require('./index');

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const command = () => {
    rl.question("Enter command: ", function(values) {
        if (values === 'Q') {
            rl.close();
        } else {
            index.runCommands(values);
            command();
        }
    });
}

command();
