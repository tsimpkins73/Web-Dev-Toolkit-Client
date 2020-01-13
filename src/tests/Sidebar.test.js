import React from 'react';


import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Sidebar from '../Sidebar';


it('renders without crashing', () => {
    let articles= [];
    let categories= [];
    let handleSearchForm=[];

      const div = document.createElement('div');
      ReactDOM.render( < BrowserRouter > <Sidebar articles={articles}  handleSearchForm={handleSearchForm} categories={categories} />
        </BrowserRouter>, div);


        ReactDOM.unmountComponentAtNode(div);
      });