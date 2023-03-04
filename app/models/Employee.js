// Base class for all employees. Exported as a module.
export default class Employee {
    #name;
    #id;
    #email;

    // constuctor method to initialize the class properties
    constructor ( {name, id, email} ) {
        this.#name = name;
        this.#id = id;
        this.#email = email
    }

    getRole(){
        return "Employee";
    }

    get name() {
        return this.#name
    }

    get id() {
        return this.#id
    }

    get email() {
        return this.#email
    }
}