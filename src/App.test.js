import { render, screen } from "@testing-library/react";
import Limit from "./components/LimitSelect";

test("select limit", () => {
  render(<Limit />);
  screen.getByDisplayValue(10);
});
