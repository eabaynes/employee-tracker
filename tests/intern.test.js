import { describe, expect, it } from "vitest";
import Intern from "../app/models/Intern.js";

describe("Intern", () => {
    it("should return the intern name", () => {
        const intern = new Intern({
            name: "John Doe",
            id: 1,
            email: "johndoe@gmail.com",
            school: "University of Washington"
            });

            expect(intern.getName().toEqual("John Doe"));
    });

    it("should return the intern id", () => {
        const intern = new Intern({
            name: "John Doe",
            id: 1,
            email: "johndoe@gmail.com",
            school: "University of Washington"
            });

            expect(intern.getId().toEqual(1));
    });

    it("should return the intern email", () => {
        const intern = new Intern({
            name: "John Doe",
            id: 1,
            email: "johndoe@gmail.com",
            school: "University of Washington"
            });

            expect(intern.getEmail().toEqual("johndoe@gmail.com"));
    });

    it("should return the intern role", () => {
        const intern = new Intern({
            name: "John Doe",
            id: 1,
            email: "johndoe@gmail.com",
            school: "University of Washington"
            });

            expect(intern.getRole().toEqual("Intern"));
    });

    it("should return the intern school", () => {
        const intern = new Intern({
            name: "John Doe",
            id: 1,
            email: "johndoe@gmail.com",
            school: "University of Washington"
            });

            expect(intern.getSchool().toEqual("University of Washington"));
    });

});