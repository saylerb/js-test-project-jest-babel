import sayHello from "../src/sayHello";

test("test it fails", () => {
  expect(sayHello()).toEqual("what");
})
