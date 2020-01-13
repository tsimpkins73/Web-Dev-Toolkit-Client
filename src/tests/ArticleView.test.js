import React from 'react';


import ReactDOM from 'react-dom';

import {BrowserRouter } from 'react-router-dom';
import ArticleView from '../ArticleView';


it('renders without crashing', () => {
  const user = [];
  let article = [];
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter> <ArticleView article={article} user={user}/></BrowserRouter>, div);


  ReactDOM.unmountComponentAtNode(div);
});