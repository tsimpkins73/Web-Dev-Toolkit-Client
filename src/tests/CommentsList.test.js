import React from 'react';


import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import CommentsList from '../CommentsList';


it('renders without crashing', () => {
let comments= {};
        let users= {}; 
        const currentUser = {};
        const deleteComment = {};
      const div = document.createElement('div');
      ReactDOM.render( < BrowserRouter > < CommentsList comments={comments} users={users} currentUser={currentUser} deleteComment={deleteComment}
        />
        </BrowserRouter>, div);


        ReactDOM.unmountComponentAtNode(div);
      });