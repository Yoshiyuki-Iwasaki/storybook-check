import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import PostTemplate from "./post";

import knobData from "./post.knobs.json";
const { direction, items }: any = knobData;

export const examplePost = () => <PostTemplate />;

export default {
  component: PostTemplate,
  decorators: [withKnobs],
  title: "Templete|Blog Post",
};
