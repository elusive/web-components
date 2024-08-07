import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
    title: "WebTv Buttons",
    component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Regular: Story = { 
    args: {
        text: "Regular",
        "webtv-button": "true",
    },
};

export const Medium: Story = {
    args: {
        text: "Medium",
        "webtv-medium-button": "true",
    },
};

export const Small: Story = {
    args: {
        text: "Small",
        "webtv-small-button": "true",
    },
};

export const IconOnly: Story = {
    args: {
        text: "",
        icon: "icon-plus",
        "webtv-button": "true",
    },
};
export const TrailerButton: Story = {
    args: {
        text: "Trailer",
        icon: "icon-trailer",
        "webtv-button": "true",
    },
};

export const DynamicWidth: Story = {
    args: {
        text: "Restart",
        icon: "icon-restart",
        "webtv-dynamic-width-button": "true",
    },
};

export const DynamicWidthTiny: Story = {
    args: {
        text: "Start Over",
        "webtv-dynamic-width-tiny-button": "true",
    },
};