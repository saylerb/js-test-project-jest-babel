const hello = require("../src/sayHello");

test("test it fails", () => {
  expect(hello()).toEqual("what");
})
