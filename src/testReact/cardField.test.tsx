import { render } from "@testing-library/react";
import { CardField } from "../components/cardsField";

test("render learn react link", () => {
  const { getByText } = render(<CardField />);
  const linkElement = getByText(/Angular 8 - Быстрый курс за 60 минут/i);
  expect(linkElement).toBeInTheDocument();
});
