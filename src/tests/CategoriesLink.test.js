import React from 'react';


import ReactDOM from 'react-dom';

import { Link, BrowserRouter } from 'react-router-dom';
import CategoriesLink from '../CategoriesLink';


it('renders without crashing', () => {
  let category = []
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter> <CategoriesLink category={category} Link={Link} /></BrowserRouter>, div);


  ReactDOM.unmountComponentAtNode(div);
});