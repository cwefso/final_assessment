import React from "react";
import UrlContainer from "./UrlContainer";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("UrlContainer", () => {
	it("should appropriately render headings and anchor tags", () => {
		const urls = [
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
		];

		const { getByRole } = render(<UrlContainer urls={urls} />);

		const heading1 = getByRole("heading", { name: "Awesome photo" });
		const heading2 = getByRole("heading", { name: "Bats" });
		const link1 = getByRole("link", {
			name: "http://localhost:3001/useshorturl/1",
		});
		const link2 = getByRole("link", {
			name: "http://localhost:3001/useshorturl/2",
		});

		expect(heading1).toBeInTheDocument();
		expect(heading2).toBeInTheDocument();
		expect(link1).toBeInTheDocument();
		expect(link2).toBeInTheDocument();
	});
});
