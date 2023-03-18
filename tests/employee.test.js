import { describe, expect, it } from "vitest";
import Employee from "../app/Employee.js";

describe("Employee", () => {
    it("should return the employee name", () => {
        const employee = new Employee({
            name: "John Doe",
            id: 1,
            email: "johndoe@gmail.com"
            });

            expect(employee.getName().toEqual("John Doe"));
    });

    it("should return the employee id", () => {
        const employee = new Employee({
            name: "John Doe",
            id: 1,
            email: "johndoe@gmail.com"
            });

            expect(employee.getId().toEqual(1));
    });

    it("should return the employee email", () => {
        const employee = new Employee({
            name: "John Doe",
            id: 1,
            email: "johndoe@gmail.com"
            });

            expect(employee.getEmail().toEqual("johndoe@gmail.com"));
    });

    it("should return the employee role", () => {
        const employee = new Employee({
            name: "John Doe",
            id: 1,
            email: "johndoe@gmail.com"
            });

            expect(employee.getRole().toEqual("Employee"));
    });
});