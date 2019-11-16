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

    function dieRoll(dieType, dieNumber) {
        for (let i = 0; i <= dieNumber; i++) {
            initialResult = Math.floor((Math.random() * dieType) + 1);
        }
        return initialResult;
    }

    switch (dieType) {
        case "D2":
            result = dieRoll(2, dieNumber);
            break;
        case "D4":
            result = dieRoll(4, dieNumber);
            break;
        case "D6":
            result = dieRoll(6, dieNumber);
            break;
        case "D8":
            result = dieRoll(8, dieNumber);
            break;
        case "D10":
            result = dieRoll(10, dieNumber);
            break;
        case "D12":
            result = dieRoll(12, dieNumber);
            break;
        case "D20":
            result = dieRoll(20, dieNumber);
            break;
        case "D100":
            result = dieRoll(100, dieNumber);
    }

    const finalResult = result + modifier;

    console.log(`You rolled a ${finalResult}!`);
});