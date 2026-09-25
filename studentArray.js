"use strict";
const students = [
    {
        name: "Haider",
        age: 22,
        company: "codek",
    },
    {
        name: "Hussnain",
        age: 22,
        company: "codek",
    },
];
function same(students, search) {
    return students.filter((val) => val.name.toLowerCase() === search.toLowerCase());
}
console.log(same(students, "Hussnain"));
