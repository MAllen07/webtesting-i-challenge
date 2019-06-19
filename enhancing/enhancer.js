module.exports = {
  succeed,
  fail,
  repair,
  get,
};

// Successful enhancement
function succeed(item) {
  item = { ...item, enhancement: item }

  if (item.enhancement !== 20) {
    return { ...item, enhancement: item.enhancement + 1 };
  } else {
    return { ...item }
  }
};

// Failed enhancement
function fail(item) {
  if (item.enhancement < 15) {
    return {
      ...item,
      durability: item.durability - 5
    };
  } else {
    if (item.enhancement === 15) {
      return {
        ...item,
        durability: item.durability - 10
      }
    } else {
      return {
        ...item,
        durability: item.durability - 10,
        enhancement: item.enhancement - 1
      };
    };
  };
};

// After a repair
function repair(item) {// <-- Passed in item/parameter
  return { ...item, durability: 100 }; //<-- Returned item
};
/* 
A) Passed in item:
{
  name: "Sword",
  durability: 10
}

B) Returned item
{
  name: "Sword",
  durability: 100
}

-*NOTE: You're testing to make sure the return item has a durability of 100. 


*/

// Grab item
function get(item) {
  return { ...item };
};