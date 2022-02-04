import React from 'react';
import ParseHTML from '../../particles/parseHTML';
import StylesPostContent from './postContent.styles';

const PostContent = ({ content }: any) => (
  <StylesPostContent>{ParseHTML(content)}</StylesPostContent>
);

export default PostContent;
