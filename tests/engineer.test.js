import { describe, expect, it } from "vitest";
import Engineer from "../app/models/Engineer.js";

describe("Engineer", () => {
    it("should return the engineer name", () => {
        const engineer = new Engineer({
        name: "John Doe",
        id: 1,
        email: "johndoe@gmail.com",
        github: "johndoe",
        });

        expect(engineer.name).toEqual("John Doe");
    });

    it("should return the engineer id", () => {
        const engineer = new Engineer({
        name: "John Doe",
        id: 1,
        email: "johndoe@gmail.com",
        github: "johndoe",
        });

        expect(engineer.id).toEqual(1);
    });

    it("should return the engineer email", () => {
        const engineer = new Engineer({
        name: "John Doe",
        id: 1,
        email: "johndoe@gmail.com",
        github: "johndoe",
        });

        expect(engineer.email).toEqual("johndoe@gmail.com");
    });

    it("should return the engineer role", () => {
        const engineer = new Engineer({
        name: "John Doe",
        id: 1,
        email: "johndoe@gmail.com",
        github: "johndoe",
        });

        expect(engineer.getRole()).toEqual("Engineer");
    });

    it("should return the engineer github", () => {
        const engineer = new Engineer({
        name: "John Doe",
        id: 1,
        email: "johndoe@gmail.com",
        github: "johndoe",
        });

        expect(engineer.github).toEqual("johndoe");
    });
});