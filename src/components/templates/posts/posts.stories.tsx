import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import PostTemplate from "./post";

import knobData from "./post.knobs.json";
const { direction, items }: any = knobData;

const blogContent =
  "<p>Hello World. Hello World. Hello World. Hello World. Hello World.</p>";

export const examplePost = () => <PostTemplate content={blogContent} />;

export default {
  component: PostTemplate,
  decorators: [withKnobs],
  title: "Templete|Blog Post",
};
