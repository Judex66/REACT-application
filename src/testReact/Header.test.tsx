import { render } from "@testing-library/react";
import { Header } from "../components/header";

test("render learn react link", () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/Content/i);
  expect(linkElement).toBeInTheDocument();
});
