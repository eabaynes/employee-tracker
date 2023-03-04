// import parent class
import Employee from "./Employee.js";

export default class Intern extends Employee {
    #school;

    // constuctor method to initialize the class properties
    constructor ({ name, id, email, school }) {
        super({ name, id, email});
        this.#school = school
    }

    getRole() {
        return "Intern";
    }

    get school() {
        return this.#school;
    }

    // method to generate unique list element for the intern
    generateUniqueListElement() {
        return `<li class="list-group-item">School: ${this.school}</li>`;
    };
}