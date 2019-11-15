var inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "list",
        name: "inputDieType",
        message: "Please select die type:",
        choices: ["D2", "D4", "D6", "D8", "D10", "D12", "D20", "D100"]
    },
    {
        type: "number",
        name: "inputDieNumber",
        message: "How many do you need to roll?"
    },
    {
        type: "number",
        name: "inputModifier",
        message: "Input roll modifier, if any (input 0 if no modifier):"
    }
]).then(answers => {
    console.log("");

    const dieType = answers.inputDieType;
    const dieNumber = answers.inputDieNumber;
    const modifier = answers.inputModifier;

    switch (dieType) {
        case "D2":
            result = Math.floor((Math.random() * 2) + 1);
            break;
        case "D4":
            result = Math.floor((Math.random() * 4) + 1);
            break;
        case "D6":
            result = Math.floor((Math.random() * 6) + 1);
            break;
        case "D8":
            result = Math.floor((Math.random() * 8) + 1);
            break;
        case "D10":
            result = Math.floor((Math.random() * 10) + 1);
            break;
        case "D12":
            result = Math.floor((Math.random() * 12) + 1);
            break;
        case "D20":
            result = Math.floor((Math.random() * 20) + 1);
            break;
        case "D100":
            result = Math.floor((Math.random() * 100) + 1);
    }

    const finalResult = result + modifier;

    console.log(`You rolled a ${finalResult}!`);
});