//NavigationMenu/__test__/NavigationMenu.test.jsx
import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import NavigationMenu from "../NavigationMenu";

describe("NavigationMenu component", () => {
    it("NavigationMenu should render correctly", () => {
        render(<NavigationMenu />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
});
