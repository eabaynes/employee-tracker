// How it works:
// command line only
// prompted for team members and their information
// HTML will be generated based on input
// email in HTML can be clicked on and will link to default email app
// clickable github links where applicable

// do you want to add a manager, engineer or intern?

// html is generated from all responses

import inquirer from "inquirer"

// general questions for every employee
const employeeQuestions = [
    {
        type: "list",
        name: "role",
        message: "What is the employee's role?",
        choices: ["Manager", "Intern", "Engineer"]
    },
    {
        type: "input",
        name: "name",
        message: "What is the employee's name?"
    },
    // todo add validate to check that id is a number
    {
        type: "input",
        name: "id",
        message: "What is the employee's ID number?"
    },
    // todo add validate to check that email is valid format
    {
        type: "input",
        name: "email",
        message: "What is the employee's email?"
    }
]

// unique question for the managers
const managerQuestion= [
    {
        type: "input",
        name: "office",
        message: "What office is this Manager located at?"
    }
]

// unique question for the interns
const internQuestion= [
    {
        type: "input",
        name: "school",
        message: "What school is the intern enrolled at?"
    }
]

// unique question for the engineers
const engineerQuestion= [
    {
        type: "input",
        name: "github",
        message: "What is the engineer's github account?"
    }
]