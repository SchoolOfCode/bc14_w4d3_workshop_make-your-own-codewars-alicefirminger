//👉 Write your tests below here:

import { test, expect } from "@jest/globals"; 
import { buffyStakes } from './main.js';

test ("Check the number of letters in the name Spike", () => {
    const vampireName = "Spike";
    expect(buffyStakes(vampireName)).toBe(5);
    console.log(buffyStakes(vampireName));
});

test ("Check the number of letters in the name angelus", () => {
    const vampireName = "Angelus";
    expect(buffyStakes(vampireName)).toBe(7);
    console.log(buffyStakes(vampireName));
});

test ("Check the number of letters in the name Drusilla", () => {
    const vampireName = "Drusilla";
    expect(buffyStakes(vampireName)).toBe(8);
    console.log(buffyStakes(vampireName));
});

test ("Check the number of letters in the name Darla", () => {
    const vampireName = "Darla";
    expect(buffyStakes(vampireName)).toBe(5);
    console.log(buffyStakes(vampireName));
});

test('Return 0 when the name is an empty string', () => {
    expect(buffyStakes("")).toBe(0);
    console.log(buffyStakes(""));
});  

test ('Add up all the letters in the vampire names array', () => {
    const allVampireNames = ["Spike", "Darla", "Drusilla", "Angelus"]
    expect(buffyStakes(allVampireNames)).toBe(25); 
    console.log(buffyStakes(allVampireNames));
});