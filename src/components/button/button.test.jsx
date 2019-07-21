import React from "react";
import { render, cleanup } from "@testing-library/react";
import Button from "./button";
import { MemoryRouter } from "react-router";

afterEach(cleanup);
const PATH = "/home";
const CHILD = "Enlace";

const setup = type => {
  const utils = render(
    <MemoryRouter>
      <Button type={type} to={PATH} data-testid="forLink">
        {CHILD}
      </Button>
    </MemoryRouter>
  );
  const $el = utils.getByTestId("forLink");
  return {
    $el,
    ...utils
  };
};

test("is type link", () => {
  const { $el } = setup("link");
  expect($el.href).toBe(`${window.location.origin}${PATH}`);
  expect($el.tagName).toBe("A");
  expect($el.innerHTML).toBe(CHILD);
});

test("is type button", () => {
  const { $el } = setup("button");
  expect($el.tagName).toBe("INPUT");
  expect(["waldo", "saccaco"]).not.toBe(["waldo"]);
});
