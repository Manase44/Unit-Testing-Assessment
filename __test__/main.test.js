const testedFunction  = require("../main");

describe("Testing the graing system", () => {
    test('Should trow error if no object is passes', () => { 
        expect(testedFunction()).toThrow();
    })
})