//👉 Write your tests below here:

import { test, expect } from "@jest/globals"; 

import {
    vampireSlaying,
} from "./main.js";

test ("Check the number of letters in the name Spike"), () => {
    const vampireName = "Spike";
    const expected = 5;
    expect(vampireName).toBe(expected);
}

test ("Check the number of letters in the name Angelus"), () => {
    const vampireName = "Angelus";
    const expected = 7;
    expect(vampireName).toBe(expected);
}

test ("Check the number of letters in the name Drusilla"), () => {
    const vampireName = "Drusilla";
    const expected = 8;
    expect(vampireName).toBe(expected);
}

test ("Check the number of letters in the name Darla"), () => {
    const vampireName = "Darla";
    const expected = 5;
    expect(vampireName).toBe(expected);
}

test ('Check for upper and lowercase letters'), () => {
    const 
}

test ('Check for an empty string')

test ('Check for undefined input')

test ('Check for null input')

test ('Check for names that include numbers or symbols')