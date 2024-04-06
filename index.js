#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let answer = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What Would You like to Add in your To-Do? ",
            validate: input2 => {
                if (input2 === "") {
                    return "Please Add ";
                }
                return true;
            }
        },
        {
            name: "addmore",
            type: "confirm",
            message: "Would You like to Add more in your To-Do? ",
            default: "true"
        }
    ]);
    todos.push(answer.todo);
    console.log(todos);
    condition = answer.addmore;
}
let itemDelete = await inquirer.prompt({
    name: "remove",
    type: "confirm",
    message: "Do You Want to remove a Todo",
    default: "false"
});
if (itemDelete.remove) {
    let removeItem = await inquirer.prompt({
        name: "itemRemove",
        type: "list",
        choices: todos,
        message: "Select a Todo"
    });
    let removelist = todos.indexOf(removeItem.itemRemove);
    if (removelist !== -1) {
        todos.splice(removelist, 1);
        console.log("Your Todos:");
        console.log(todos);
    }
}
else if (itemDelete.remove === false) {
    console.log(todos);
}
