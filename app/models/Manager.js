// import parent class
import Employee from "./Employee.js"

export default class Manager extends Employee {
    #officeNumber

    // constuctor method to initialize the class properties
    constructor({ name, id, email, officeNumber}) {
        super({ name, id, email });
        this.#officeNumber = officeNumber
    }

    getRole() {
        return "Manager";
    }

    get officeNumber() {
        return this.#officeNumber
    }

    // method to generate unique list element for the manager
    generateUniqueListElement() {
        return `<li class="list-group-item">Office: ${this.#officeNumber}</li>`;
    };
}