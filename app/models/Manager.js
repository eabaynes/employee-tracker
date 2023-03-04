// import parent class
import Employee from "./Employee.js"

export default class Manager extends Employee {
    #office

    // constuctor method to initialize the class properties
    constructor({ name, id, email, office}) {
        super({ name, id, email });
        this.#office = office
    }

    getRole() {
        return "Manager";
    }

    get office() {
        return this.#office
    }

    // method to generate unique list element for the manager
    generateUniqueListElement() {
        return `<li class="list-group-item">Office: ${this.office}</li>`;
    };
}