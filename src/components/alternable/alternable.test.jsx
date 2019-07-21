import React from "react";
import { render, cleanup } from "@testing-library/react";
import Alternable from "./alternable";

afterEach(cleanup);
const TITLE = "Prueba de una opción";
const CHILD = "Child a mostrar";

const setup = () => {
  const utils = render(<Alternable title={TITLE}>{CHILD}</Alternable>);
  return {
    ...utils
  };
};

test("props title and children must render", () => {
  const { getByText } = setup();

  expect(getByText(TITLE).innerHTML).toBe(TITLE);
  expect(getByText(CHILD).innerHTML).toBe(CHILD);
});
