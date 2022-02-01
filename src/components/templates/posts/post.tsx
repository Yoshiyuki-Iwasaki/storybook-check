import React from "react";

import StyledPost from "./post.styles";

import PostContent from "../../molecules/post/postContent";

const PostTemplate = ({ content }: any) => {
  return (
    <StyledPost>
      <PostContent content={content} />
    </StyledPost>
  );
};

export default PostTemplate;
