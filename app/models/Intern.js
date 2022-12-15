import Employee from "./Employee.js";

export default class Intern extends Employee {
    #school;

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
}