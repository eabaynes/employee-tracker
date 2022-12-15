import Employee from "./Employee.js"

export default class Manager extends Employee {
    #office

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
}