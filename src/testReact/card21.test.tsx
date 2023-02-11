import { render } from "@testing-library/react";
import { CardField } from "../components/cardsField";

test("render Card link", () => {
  const { getByText } = render(<CardField />);
  const linkElement1 = getByText(/Angular Crash Course/i);
  const linkElement2 = getByText(
    /Angular Tutorial for Beginners: Learn Angular from Scratch | Mosh/i
  );
  expect(linkElement1).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
});
// обьявить все и все в кардинфо
