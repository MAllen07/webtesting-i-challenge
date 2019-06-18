//.test/.spec files are designated test files.
const { succeed, fail, repair } = require("./enhancer.js");

//Test - Repair -- Use Describe() or Test() and inside of those, write it() for every test.

describe("Repair test", () => {
  it("Durability  test", () => {
    //test - check specific functionality to see if its working probably
    const expected = 100; //value to check
    const item = {}; //setting object that you are going to pass into the function you are testing
    const actual = repair(item); // create object and pass in // invoke function
    expect(actual.durability).toBe(expected); // .toBe() looks for strict equality!
  });

  describe("succeed test", () => {
    it();
  });

  // NOTES
  /*
    item = {} --> the function turns it into this --> {...item, durability: 100}
    actual = {
        durability: 100
    }

    person = {
    name: "Brian",
    age: 27
    }
    person.age
    */
});

//NOTES
// The first argument: describe what you want to do.. and takes two parameters. One is a string and the other is a function
//The second argument: within the function param, is where you write your test.

//parameter -  variable you write in a function when you declare it
//argument -  Items/ variables you pass in when you invoke a function

// Test-Succeed

//Test- Fail
