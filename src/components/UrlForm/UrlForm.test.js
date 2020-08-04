import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UrlForm from "../UrlForm/UrlForm";

describe("UrlForm", () => {
  it("should render correct elements on the dom when rendered", () => {
    const { getByPlaceholderText, getByRole } = render(
        <UrlForm />
    );
    const titleInput = getByPlaceholderText("Title..." );
    const urlInput = getByPlaceholderText("URL to Shorten..." );
    const button = getByRole("button")
    expect(titleInput).toBeInTheDocument();
    expect(urlInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should display all Names elements on load", () => {
    const { getByPlaceholderText } = render(

        <UrlForm />

    );
    const titleInput = getByPlaceholderText("Title..." );
    const urlInput = getByPlaceholderText("URL to Shorten..." );
    fireEvent.change(titleInput, { target: { value: "Test Title" } });
    fireEvent.change(urlInput, { target: { value: "Test Url" } });
    expect(titleInput.value).toEqual("Test Title");
    expect(urlInput.value).toEqual("Test Url");
  });

  // it("should call setPlayers when the submit button is clicked", () => {
  //   const testHistoryObject = createMemoryHistory();
  //   const setPlayers = jest.fn();
  //   const { getByRole, getByLabelText } = render(
  //     <MemoryRouter>
  //       <Names setPlayers={setPlayers} history={testHistoryObject} />
  //     </MemoryRouter>
  //   );
  //   const player1input = getByLabelText("player-one");
  //   expect(player1input).toBeInTheDocument();
  //   fireEvent.change(player1input, { target: { value: "Mikey" } });
  //   const player2input = getByLabelText("player-two");
  //   expect(player2input).toBeInTheDocument();
  //   fireEvent.change(player2input, { target: { value: "Donnie" } });
  //   const player3input = getByLabelText("player-three");
  //   expect(player3input).toBeInTheDocument();
  //   fireEvent.change(player3input, { target: { value: "Raph" } });
  //   const player4input = getByLabelText("player-four");
  //   expect(player4input).toBeInTheDocument();
  //   fireEvent.change(player4input, { target: { value: "Leo" } });
  //   const player5input = getByLabelText("player-five");
  //   expect(player5input).toBeInTheDocument();
  //   fireEvent.change(player5input, { target: { value: "Master Splinter" } });
  //   const submitButton = getByRole("link", { name: "Submit" });
  //   expect(submitButton).toBeInTheDocument();
  //   fireEvent.click(submitButton);
  //   expect(setPlayers).toHaveBeenCalledTimes(1);
  // });

  // it("should call setPlayers with the players names submitted", () => {
  //   const testHistoryObject = createMemoryHistory();
  //   const setPlayers = jest.fn();
  //   const { getByRole, getByLabelText } = render(
  //     <MemoryRouter>
  //       <Names setPlayers={setPlayers} history={testHistoryObject} />
  //     </MemoryRouter>
  //   );
  //   const player1input = getByLabelText("player-one");
  //   const player2input = getByLabelText("player-two");
  //   const player3input = getByLabelText("player-three");
  //   const player4input = getByLabelText("player-four");
  //   const player5input = getByLabelText("player-five");
  //   fireEvent.change(player1input, { target: { value: "Donatello" } });
  //   fireEvent.change(player2input, { target: { value: "Raphael" } });
  //   fireEvent.change(player3input, { target: { value: "Michelangelo" } });
  //   fireEvent.change(player4input, { target: { value: "Leonardo" } });
  //   fireEvent.change(player5input, { target: { value: "April O`Neil" } });
  //   const submitButton = getByRole("link", { name: "Submit" });
  //   expect(submitButton).toBeInTheDocument();
  //   fireEvent.click(submitButton);
  //   expect(setPlayers).toHaveBeenCalledWith([
  //     { id: 1, name: "Donatello" },
  //     { id: 2, name: "Raphael" },
  //     { id: 3, name: "Michelangelo" },
  //     { id: 4, name: "Leonardo" },
  //     { id: 5, name: "April O`Neil" },
  //   ]);
  // });
});
