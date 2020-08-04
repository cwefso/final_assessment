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

  it("should call addUrl when the `Shorten Please` button is clicked", () => {

    const addUrl = jest.fn();
    const { getByRole } = render(
        <UrlForm addUrl={addUrl} />
    );
    const button = getByRole("button")
    fireEvent.click(button);
    expect(addUrl).toHaveBeenCalledTimes(1);
  });

});
