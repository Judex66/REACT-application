import { fireEvent, render } from "@testing-library/react";
import { Froms } from "../components/forms";
import { screen } from "@testing-library/dom";
import { CardField } from "../components/cardsField";
import userEvent from "@testing-library/user-event";

test("render Card link", () => {
  render(<Froms />);
  const inputTitle = screen.getByPlaceholderText(/Title/i);
  const inputDiscription = screen.getByPlaceholderText(/Discription/i);
  const inputImg = screen.getByPlaceholderText(/Img/i);
  const buttonPost = screen.getByTestId("postBut");
  fireEvent.input(inputTitle, {
    target: { value: "newPostTitle" },
  });
  fireEvent.input(inputDiscription, {
    target: { value: "newpostDiscription" },
  });
  fireEvent.input(inputImg, {
    target: { value: "https://wallpapercave.com/wp/wp9717413.jpg" },
  });
  expect(screen.queryByTestId("postingDics")).toContainHTML(
    "newpostDiscription"
  );
  expect(screen.queryByTestId("postingTitle")).toContainHTML("newPostTitle");
  expect(screen.queryByTestId("postingIMG")).toContainHTML(
    "https://wallpapercave.com/wp/wp9717413.jpg"
  );
  expect(screen.queryByTestId("postBut")).toBeInTheDocument;
  userEvent.click(buttonPost);
  const { getByText } = render(<CardField />);
  const linkElement1 = getByText(/newPostTitle/i);
  expect(linkElement1).toBeInTheDocument();
});
// обьявить все и все в кардинфо
