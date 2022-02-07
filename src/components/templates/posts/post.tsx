import React from 'react';

import StyledPost from './post.styles';

import PostContent from '../../molecules/post/postContent';
import Header from '../../organisms/header/header';
import Footer from '../../organisms/footer/footer';
import Banner from '../../organisms/banner/banner';
import Related from '../../organisms/related/related';

const PostTemplate = ({ banner, content, footer, header, related }: any) => {
  return (
    <StyledPost>
      <Header {...header} />
      <PostContent content={content} />
      <Banner {...banner} />
      <Related {...related} />
      <Footer {...footer} />
    </StyledPost>
  );
};

export default PostTemplate;
