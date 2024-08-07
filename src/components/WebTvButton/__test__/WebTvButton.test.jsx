//WebTvButton/__test__/WebTvButton.test.tsx
import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import WebTvButton from "../WebTvButton";

describe("Button component", () => {
    it("Button should render correctly", () => {
        render(<WebTvButton />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
});
