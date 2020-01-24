"use strict";

class Teacher {
    constructor(name) {
        this.name = name;
    }

    getName = function () {
        return this.name;
    };
    setName = function (name) {
        this.name = name;
    };

    toString = function () {
        return `${this.name}`;
    };
}

let teacher = new Teacher("Petra");

module.exports = Teacher;

//Helped by Lebogang & Sbusiso