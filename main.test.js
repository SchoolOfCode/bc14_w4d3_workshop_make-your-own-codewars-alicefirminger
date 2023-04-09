//👉 Write your tests below here:

import { test, expect } from "@jest/globals"; 
import { buffyStakes } from './main.js';

test ("Check the number of letters in the name Spike", () => {
    const vampireName = "Spike";
    expect(buffyStakes(vampireName)).toBe(5);
});

test ("Check the number of letters in the name Angelus", () => {
    const vampireName = "Angelus";
    expect(buffyStakes(vampireName)).toBe(7);
});

test ("Check the number of letters in the name Drusilla", () => {
    const vampireName = "Drusilla";
    expect(buffyStakes(vampireName)).toBe(8);
});

test ("Check the number of letters in the name Darla", () => {
    const vampireName = "Darla";
    expect(buffyStakes(vampireName)).toBe(5);
});

// test ("Check the number of letters in the name Darla", () => {
//     const vampireName = "";
//     expect(vampireName.length).toBe("undefined");
// });
// test ('Check for upper and lowercase letters'), () => {
//     const 
// }

// test ('Check for an empty string')

// test ('Check for undefined input')

// test ('Check for null input')

// test ('Check for names that include numbers or symbols')