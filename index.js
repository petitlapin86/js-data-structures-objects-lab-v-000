// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue (object, key, value) {
  return Object.assign({}, object, key, value);
}
 const newAddition = {
   key: "kyle";
 }

const newDriver = updateDriverWithKeyAndValue(driver, newAddition);
