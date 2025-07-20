import { fireEvent, render, screen } from "@testing-library/react";
import Button from "@/components/common/Button";

test("renders button text", () => {
  const handleClick = jest.fn();
  render(<Button handleClick={handleClick}>Click me</Button>);
  expect(screen.getByText("Click me")).toBeInTheDocument();
});
