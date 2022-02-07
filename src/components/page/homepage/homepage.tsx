import React from 'react';

import StyledPost from './homepage.styles';

import Header from '../../organisms/header/header';
import Footer from '../../organisms/footer/footer';
import Banner from '../../organisms/banner/banner';

const PostTemplate = ({ banner, footer, header }: any) => {
  return (
    <StyledPost>
      <Header {...header} />
      <Banner {...banner} />
      <Footer {...footer} />
    </StyledPost>
  );
};

export default PostTemplate;
