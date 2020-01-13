import React from 'react';


import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import ArticleList from '../ArticleList';


it('renders without crashing', () => {

      let articles = [];
      let handleArticleButton = []

      const div = document.createElement('div');
      ReactDOM.render( < BrowserRouter > < ArticleList articles = {
          articles
        }
        handleArticleButton = {
          handleArticleButton
        }
        />
        </BrowserRouter>, div);


        ReactDOM.unmountComponentAtNode(div);
      });