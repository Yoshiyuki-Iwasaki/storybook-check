import React from 'react';
import Parser from 'html-react-parser';

const config = {};

const parseHTML = (html: string) => {
  const clean: any = Parser(html, config);
  return clean;
};

export default parseHTML;
