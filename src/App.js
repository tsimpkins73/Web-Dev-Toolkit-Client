import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from './LandingPage.js'
import LoginForm from './LoginForm.js'
import SignUpForm from './SignUpForm.js'
import Dashboard from './Dashboard.js'


function App() {
  return (
    <main className='App'>
      <BrowserRouter>
        <Route exact path={'/'} component={LandingPage} />
        <Route path={'/login'} component={LoginForm} />
        <Route path={'/sign-up'} component={SignUpForm} />
        <Route path={'/dashboard'} component={Dashboard} />
      </BrowserRouter>
    </main>
  );
}

export default App;