// How it works:
// command line only
// prompted for team members and their information
// HTML will be generated based on input
// email in HTML can be clicked on and will link to default email app
// clickable github links where applicable

// do you want to add a manager, engineer or intern?

// html is generated from all responses

// empty array for created employees
// send that array to a render function to make hmtl

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

// inquirer prompt
// finish first employee
// do you want to add another employee?
// if yes, repeat questions
// prompt must be structured so additional question will be added based on which employee category is chosen
// if no, end questions, send data to render function

const engineerCard = {
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">employee role</h5>
    <h6 class="card-subtitle mb-2 text-muted">employee name</h6>
    <p class="card-text">employee id</p>
    <a href="#" class="card-link">email</a>
    <a href="#" class="card-link">github</a>
  </div>
</div>
}

const managerCard = {
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">employee role</h5>
    <h6 class="card-subtitle mb-2 text-muted">employee name</h6>
    <p class="card-text">office</p>
    <p class="card-text">employee id</p>
    <a href="#" class="card-link">email</a>
  </div>
</div>
}

const internCard = {
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">employee role</h5>
    <h6 class="card-subtitle mb-2 text-muted">employee name</h6>
    <p class="card-text">employee id</p>
    <p class="card-text">intern school</p>
    <a href="#" class="card-link">email</a>

  </div>
</div>
}