import { render } from "@testing-library/react";
import { About } from "../components/about";

test("render learn react link", () => {
  const { getByText } = render(<About />);
  const linkElement = getByText(/DIO/i);
  expect(linkElement).toBeInTheDocument();
});
