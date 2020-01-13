import React from 'react';


import ReactDOM from 'react-dom';


import AddCommentView from '../AddCommentView';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddCommentView />, div);


  ReactDOM.unmountComponentAtNode(div);
});