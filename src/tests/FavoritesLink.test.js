import React from 'react';


import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import FavoritesLink from '../FavoritesLink';


it('renders without crashing', () => {

    let favoriteID = [];
    let headline = [];

      const div = document.createElement('div');
      ReactDOM.render( < BrowserRouter > <FavoritesLink favoriteID={favoriteID} headline={headline} />
        </BrowserRouter>, div);


        ReactDOM.unmountComponentAtNode(div);
      });