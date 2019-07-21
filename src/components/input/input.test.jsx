import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Input from "./input";

const { TextArea } = Input;
const VALUE = "test value";

afterEach(cleanup);

function setup() {
  let utils = render(<TextArea data-testid="input-test" />);
  const input = utils.getByTestId("input-test");

  return {
    input,
    ...utils
  };
}

test("check input data same out", () => {
  let { input } = setup();
  fireEvent.change(input, {
    target: { value: VALUE }
  });

  expect(input.value).toBe(VALUE);
});
