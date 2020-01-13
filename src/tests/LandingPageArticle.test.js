import React from 'react';


import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import LandingPageArticle from '../LandingPageArticle';


it('renders without crashing', () => {
    let lpArticle= [];

      const div = document.createElement('div');
      ReactDOM.render( < BrowserRouter > <LandingPageArticle lpArticle={lpArticle} />
        </BrowserRouter>, div);


        ReactDOM.unmountComponentAtNode(div);
      });