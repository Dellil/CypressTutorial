import { render, screen } from "@testing-library/react";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

test("on initiali render, the pay button is disabled", () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "1" }} />);

  screen.debug();
});
