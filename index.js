const { arrayContaining } = require("expect");

function findMatching(driverArray, name) {
  return driverArray.filter(driver => driver.toLowerCase() === name.toLowerCase());
  };

  function fuzzyMatch(driverArray, name) {
    return driverArray.filter(person=> person[0].toLowerCase() === name[0].toLowerCase() && person[1].toLowerCase() === name[1].toLowerCase());
    };

  function matchName(driverArray, name) {
    return driverArray.filter(person=> person.name === name);
  }
