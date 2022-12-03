import { families } from "./families.js";
import { salaryOverFiveThousend,boysNames,girlsNames,childrenUnder8Age,namesOfMother } from "./function.js";

console.log(salaryOverFiveThousend(families));

console.log(boysNames.length(families));

console.log(girlsNames(families));

console.log(childrenUnder8Age(families));

console.log(namesOfMother(families)); // Children over 8 years old were filtered out, but the names of the mothers could not be found.