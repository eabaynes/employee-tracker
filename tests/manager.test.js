import { describe, expect, it } from "vitest";
import Manager from "../app/models/Manager.js";

describe("Manager", () => {
    it("should return the manager name", () => {
        const manager = new Manager({
            name: "John Doe",
            id: 1,
            email: "johndoe@gmail.com",
            officeNumber: 1
        });

        expect(manager.name).toEqual("John Doe");
    });

    it("should return the manager id", () => {
        const manager = new Manager({
            name: "John Doe",
            id: 1,
            email: "johndoe@gmail.com",
            officeNumber: 1
        });

        expect(manager.id).toEqual(1);
    });

    it("should return the manager email", () => {
        const manager = new Manager({
            name: "John Doe",
            id: 1,
            email: "johndoe@gmail.com",
            officeNumber: 1
        });

        expect(manager.email).toEqual("johndoe@gmail.com");
    });

    it("should return the manager role", () => {
        const manager = new Manager({
            name: "John Doe",
            id: 1,
            email: "johndoe@gmail.com",
            officeNumber: 1
        });

        expect(manager.getRole()).toEqual("Manager");
    });

    it("should return the manager office number", () => {
        const manager = new Manager({
            name: "John Doe",
            id: 1,
            email: "johndoe@gmail.com",
            officeNumber: 1
        });

        expect(manager.officeNumber).toEqual(1);
    });
});