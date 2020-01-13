import React from 'react';


import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import SearchDiv from '../SearchDiv';


it('renders without crashing', () => {


      const div = document.createElement('div');
      ReactDOM.render( < BrowserRouter > <SearchDiv />
        </BrowserRouter>, div);


        ReactDOM.unmountComponentAtNode(div);
      });