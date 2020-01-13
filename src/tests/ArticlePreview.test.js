import React from 'react';


import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import ArticlePreview from '../ArticlePreview';


it('renders without crashing', () => {
  let article= []
let handleArticleButton = []
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter> <ArticlePreview article={article} handleArticleButton={handleArticleButton} /> </BrowserRouter>, div);


  ReactDOM.unmountComponentAtNode(div);
});