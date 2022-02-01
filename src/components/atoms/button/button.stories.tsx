import React from "react";
import { action } from "@storybook/addon-actions";

import Button from "./button";

const buttonClicked = e => {
  e.preventDefault();
  alert("Hello");
};

export const basicButton = () => (
  <Button variant="secondary">Basic button</Button>
);
export const functionButton = () => (
  <Button onClick={buttonClicked}>Function button</Button>
);

export const linkedButton = () => (
  <Button href={"/router"}>Linked button</Button>
);

export default {
  component: Button,
  title: "Button",
};
