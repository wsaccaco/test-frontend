import React from "react";
import { render, cleanup } from "@testing-library/react";
//import DataEdit from "./data-edit";

afterEach(cleanup);

function DataEdit() {
  return <div>Hola</div>;
}

test("renders a message", () => {
  const { container, getByText } = render(<DataEdit />);
  console.log(getByText);
});
