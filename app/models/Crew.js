// import inquirer and classes from other files
import inquirer from "inquirer";
import Employee from "./Employee";
import Engineer from "./Engineer";
import Intern from "./Intern";
import Manager from "./Manager";

// Crew will be an exportable class containing inquirer prompts and an empty array to store employees
export default class Crew {
    #members = [];
    #questions = {
        manager: [
            {
                type: "input",
                name: "name",
                message: "What is the manager's name?",
                validate: (input) => this.#validateName(input),
            },
            {
                type: "input",
                name: "id",
                message: "What is the manager's id?",
                validate: (input) => this.#validateNumber(input),
            },
            {
                type: "input",
                name: "email",
                message: "What is the manager's email?",
                validate: (input) => this.#validateEmail(input),
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the manager's office number?",
                validate: (input) => this.#validateNumber(input),
            },
        ],
        menu: [
            {
                type: "list",
                name: "menuChoice",
                message: "Add another employee?",
                choices: ["Engineer", "Intern", "Finish"],
            },
        ],
        engineer: [
            {
                type: "input",
                name: "name",
                message: "What is the engineer's name?",
                validate: (input) => this.#validateName(input),
            },
            {
                type: "input",
                name: "id",
                message: "What is the engineer's id?",
                validate: (input) => this.#validateNumber(input),
            },
            {
                type: "input",
                name: "email",
                message: "What is the engineer's email?",
                validate: (input) => this.#validateEmail(input),
            },
            {
                type: "input",
                name: "github",
                message: "What is the engineer's github username?",
            },
        ],
        intern: [
            {
                type: "input",
                name: "name",
                message: "What is the intern's name?",
                validate: (input) => this.#validateName(input),
            },
            {
                type: "input",
                name: "id",
                message: "What is the intern's id?",
                validate: (input) => this.#validateNumber(input),
            },
            {
                type: "input",
                name: "email",
                message: "What is the intern's email?",
                validate: (input) => this.#validateEmail(input),
            },
            {
                type: "input",
                name: "school",
                message: "What is the intern's school?",
            },
        ],
    }

    // method to validate name input
    #validateName(input) {
        if (input === "") {
            return "Please enter a name.";
        } else {
            return true;
        }
    }

    // method to validate number input
    #validateNumber(input) {
        Boolean(input.match(/^[0-9]+$/))
            ? true
            : "Please enter a number.";
    }

    // method to validate email input
    #validateEmail(input) {
        Boolean(input.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
            ? true
            : "Please enter a valid email.";
    }

    // method to add a manager to the crew
    async #createManager() {
        const manager = await inquirer.prompt(this.#questions.manager);
        this.#members.push(new Manager(manager));
    }

    // method to add an engineer to the crew
    async #createEngineer() {
        const engineer = await inquirer.prompt(this.#questions.engineer);
        this.#members.push(new Engineer(engineer));
    }

    // method to add an intern to the crew
    async #createIntern() {
        const intern = await inquirer.prompt(this.#questions.intern);
        this.#members.push(new Intern(intern));
    }

    // method to add employees to the crew
    async addEmployees() {
        const choice = await inquirer.prompt(this.#questions.menu);

        switch (choice.menuChoice) {
            case "Engineer":
                await this.#createEngineer();
                await this.addEmployees();
                break;
            case "Intern":
                await this.#createIntern();
                await this.addEmployees();
                break;
            case "Finish":
                break;
        }
    }

    // method to return the crew
    get member() {
        return this.#members;
    }

    // method to create html cards for each employee
    generateCards() {
        return (
            this.#members
                // map through the array of employees
                .map((member) => {
                    `<div class="card employee-card">
                        <div class="card-header">
                        <h2 class="card-title">${member.name}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${member.getRole()}</h3>
                        </div>
                        
                        <div class="card-body">
                        <ul class="list-group">
                        <li class="list-group-item">ID: ${member.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
                        <li class="list-group-item">${member.generateUniqueListElement()}</li>}
                        </ul>
                        </div>
                        </div>`
                })
                // join the array of cards into a string
                .join("")
        );
    }

    async init() {
        await this.#createManager();
        return this.addEmployees();
    }
}