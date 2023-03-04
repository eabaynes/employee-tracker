// import the employee class
import Employee from "./Employee.js"

// Engineer class extends the Employee class and adds the github property
export default class Engineer extends Employee {
    #github;

    // constuctor method to initialize the class properties
    constructor({ name, id, email, github}) {
        super({name, id, email});
        this.#github = github
    }

    getRole() {
        return "Engineer";
    }

    get github() {
        return this.#github;
    }

    // method to generate unique list element for the engineer
    generateUniqueListElement() {
        return `<li class="list-group-item"><a href="https://github.com/${this.github}">Github</a></li>`;
    };
}