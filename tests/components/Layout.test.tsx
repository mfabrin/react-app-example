import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Layout from "../../src/components/Layout";

describe("Layout component", () => {
	it("renders children when not loading", () => {
		render(
			<MemoryRouter>
				<Layout>Hello World</Layout>
			</MemoryRouter>,
		);

		screen.debug();
	});
});
