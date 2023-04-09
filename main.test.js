//👉 Write your tests below here:

import { test, expect } from "@jest/globals"; 
import { buffyStakes } from './main.js';

test ("Check the number of letters in the name Spike", () => {
    const vampireName = "Spike";
    expect(buffyStakes(vampireName)).toBe(5);
});

test ("Check the number of letters in the name angelus", () => {
    const vampireName = "Angelus";
    expect(buffyStakes(vampireName)).toBe(7);
});

test ("Check the number of letters in the name Drusilla", () => {
    const vampireName = "Drusilla";
    expect(buffyStakes(vampireName)).toBe(8);
});

test ("Check the number of letters in the name DARLA", () => {
    const vampireName = "Darla";
    expect(buffyStakes(vampireName)).toBe(5);
});

test('Return 0 when the name is an empty string', () => {
    expect(buffyStakes("")).toBe(0);
});  


   



// test('should return correct number of stakes for mixed case input', () => {
//     expect(buffyStakes('Buffy')).toBe(5);
//     expect(buffyStakes('ANGEL')).toBe(5);
//     expect(buffyStakes('SpIkE')).toBe(5);
//     expect(buffyStakes('Willow')).toBe(6);
//   }); example from chat GPT