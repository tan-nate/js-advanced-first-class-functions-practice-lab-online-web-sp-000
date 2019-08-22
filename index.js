// Code your solution in this file!
function logDriverNames(driver) {
  driver.forEach(function (element) {
    console.log(element.name);
  });
}

function logDriversByHometown(driver, hometown) {
  driver.forEach(function (element)) {
    if (element.hometown === hometown) {
      console.log(element.name);
    }
  }
}
