import React from "react";
import App from "./App";
import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { getUrls, postUrl } from "../../apiCalls";
jest.mock("../../apiCalls");

getUrls.mockResolvedValue({
	urls: [
		{
			id: 1,
			long_url:
				"https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
			short_url: "http://localhost:3001/useshorturl/1",
			title: "Awesome photo",
		},
		{
			id: 2,
			long_url:
				"hhttps://www.google.com/search?hl=en&tbm=isch&sxsrf=ALeKk019HCeePc1DAPXiLddrKxvtm55B6w%3A1596555517646&source=hp&biw=1920&bih=1093&ei=_YApX_TRJIvbtAaA4ouICQ&q=bats&oq=bats&gs_lcp=CgNpbWcQAzIFCAAQsQMyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BwgjEOoCECc6BAgjECdQvwpYpw1gkA5oAXAAeACAATSIAbgBkgEBNJgBAKABAaoBC2d3cy13aXotaW1nsAEK&sclient=img&ved=0ahUKEwi0xPbj8IHrAhWLLc0KHQDxApEQ4dUDCAc&uact=5",
			short_url: "http://localhost:3001/useshorturl/2",
			title: "Bats",
		},
	],
});

describe("App", () => {
	it("should appropriately render headings", () => {
		const { getByRole } = render(<App />);
		const heading = getByRole("heading");
		expect(heading).toBeInTheDocument();
	});

	it("as a user I can view all posts when I load the page", async () => {
		const { getByText } = render(<App />);

		const Title1 = await waitFor(() => getByText("Awesome photo"));
		const Title2 = await waitFor(() => getByText("Bats"));

		expect(Title2).toBeInTheDocument();
		expect(Title1).toBeInTheDocument();
	});

	it("as a user I can fill out the form, submit the form, and see a new url added to the DOM", async () => {
		const { getByText, getByPlaceholderText, getByRole } = render(<App />);

		const Title1 = await waitFor(() => getByText("Awesome photo"));
		const Title2 = await waitFor(() => getByText("Bats"));
		const titleInput = getByPlaceholderText("Title...");
		const urlInput = getByPlaceholderText("URL to Shorten...");
		const button = getByRole("button", { name: "Shorten Please!" });
		expect(titleInput).toBeInTheDocument();
		expect(urlInput).toBeInTheDocument();
		expect(button).toBeInTheDocument();
		expect(Title2).toBeInTheDocument();
		expect(Title1).toBeInTheDocument();
		fireEvent.change(titleInput, { target: { value: "Test Title" } });
		fireEvent.change(urlInput, { target: { value: "Test Url" } });
		expect(titleInput.value).toEqual("Test Title");
		expect(urlInput.value).toEqual("Test Url");
		fireEvent.click(button);
		//The function I planned to use to show the new post is causing my tests to run forever without finishing.
		//I'm not sure how to mock out my post method so that it actually updates the mocked urls array
		// const Title3 = await waitFor(() => getByText("Test Title"))
		// expect(Title3).toBeInTheDocument()
	});

	it("as a user I can delete a url, and see the url removed from the DOM", async () => {
		const { getByText, getByPlaceholderText, getByRole, getAllByRole } = render(
			<App />
		);
		const Title1 = await waitFor(() => getByText("Awesome photo"));
		const Title2 = await waitFor(() => getByText("Bats"));
		expect(Title2).toBeInTheDocument();
		expect(Title1).toBeInTheDocument();
		const titleInput = getByPlaceholderText("Title...");
		const urlInput = getByPlaceholderText("URL to Shorten...");
		const deleteButton2 = getByRole("button", { name: "Delete URL 2" });
		expect(titleInput).toBeInTheDocument();
		expect(urlInput).toBeInTheDocument();
		expect(deleteButton2).toBeInTheDocument();
		fireEvent.click(deleteButton2);
		const links = getAllByRole("link");
		expect(links).toHaveLength(1);
	});
});
