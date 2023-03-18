// import inquirer and classes from other files
import inquirer from "inquirer";
import Engineer from "./Engineer.js";
import Intern from "./Intern.js";
import Manager from "./Manager.js";

// Crew will be an exportable class containing inquirer prompts and an empty array to store employees
export default class Crew {
    #members = [];
    #questions = {
        manager: [
            {
                type: "input",
                name: "name",
                message: "What is the manager's name?",
                validate: (answer) => this.#validateName(answer),
            },
            {
                type: "input",
                name: "id",
                message: "What is the manager's id?",
                validate: (answer) => this.#validateNumber(answer),
            },
            {
                type: "input",
                name: "email",
                message: "What is the manager's email?",
                validate: (answer) => this.#validateEmail(answer),
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the manager's office number?",
                validate: (answer) => this.#validateNumber(answer),
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
                validate: (answer) => this.#validateName(answer),
            },
            {
                type: "input",
                name: "id",
                message: "What is the engineer's id?",
                validate: (answer) => this.#validateNumber(answer),
            },
            {
                type: "input",
                name: "email",
                message: "What is the engineer's email?",
                validate: (answer) => this.#validateEmail(answer),
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
                validate: (answer) => this.#validateName(answer),
            },
            {
                type: "input",
                name: "id",
                message: "What is the intern's id?",
                validate: (answer) => this.#validateNumber(answer),
            },
            {
                type: "input",
                name: "email",
                message: "What is the intern's email?",
                validate: (answer) => this.#validateEmail(answer),
            },
            {
                type: "input",
                name: "school",
                message: "What is the intern's school?",
            },
        ],
    }

     // method to add employees to the crew
     async addEmployees() {
            const choice = await inquirer.prompt(this.#questions.menu);
            // then add employees based on user input
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

    // method to validate name input
    #validateName(name) {
        return name !== "" || "Please enter a name.";
      }

    // method to validate number input
    #validateNumber(input) {
        return (
            isNaN(input) || input === "" ? "Please enter a number." : true
        )
    }

    // method to validate email input
    #validateEmail(email) {
        return (
          Boolean(email.match(/\S+@\S+\.\S+/)) ||
          "Please enter a valid email address."
        );
    }

    // method to return the crew
    get member() {
        return this.#members;
    }

    // method to create html cards for each employee
    generateCards() {

        // create an empty array to store the cards
        const cards = [];

        // loop through the array of employees
         this.#members
            // map through the array of employees
            .map((member) => {
                    // create a card for each employee
                    const card = `<div class="card">
                    <div class="card-header">
                        <h2>${member.name}</h2>
                        <h3>${member.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li>ID: ${member.id}</li>
                            <li>Email: <a href="mailto:${member.email}">${member.email}</a></li>
                            ${member.generateUniqueListElement()}
                        </ul>
                    </div>
                </div>`

                // push the card to the cards array
                cards.push(card)
            })
            // join the cards array into a string
            const cardsHTML= cards.join(" ")

            // return the string of cards
            return cardsHTML;
    }

    async init() {
        await this.#createManager();
        return this.addEmployees();
    }
}