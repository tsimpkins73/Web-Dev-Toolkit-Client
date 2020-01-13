import React from 'react';


import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import CommentView from '../CommentView';


it('renders without crashing', () => {
    let users= []; 
   let user= []; 
   let userId= []; 
  let currentUserId = [];
  let comment = [];
  let deleteComment= [];


  let setValues = () => {
    let users = []
    let user = []
    let userId = []
    let currentUserId = []
    this.setState({ user: user });
    this.setState({ userId: userId });
    this.setState({ currentUserId: currentUserId });
}

      const div = document.createElement('div');
      ReactDOM.render( < BrowserRouter > < CommentView setValues={setValues} user={user} users={users} userId={userId} currentUserId={currentUserId} comment={comment} deleteComment={deleteComment}
        />
        </BrowserRouter>, div);


        ReactDOM.unmountComponentAtNode(div);
      });