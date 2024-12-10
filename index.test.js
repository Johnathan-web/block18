const { describe } = require("yargs");
const multiply= require ("./index");
const concatOdds= require ("./index")

test("takes two numbers 5 and 6 and return 30", () => { 
    expect(multiply(5, 6)).toEqual(30);
});
test("It should return odd numbers, in ascending order", () => {
    expect(concatOdds(1, 3, 6, 2, 1)).not.toBe();
});
// describe("testing multiply", () => {
//     it("takes two numbers 5 and 6 and return 30",() => {
// expect(multiply(5, 6)).toEqual(30);
//     });
// });