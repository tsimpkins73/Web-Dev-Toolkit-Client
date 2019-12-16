import React from 'react'
import './SignUpForm.css'
import { Link } from 'react-router-dom';

export default class SignUpForm extends React.Component {
    render() {
        return (
            <section class="LandingContainer">
                <div class="SignUpForm"><h1 id="HeaderText">Signup Form Header</h1>
                    <label for="Name">Name</label>
                    <input type="text" /> 
                    <label for="Email">Email</label>
                    <input type="text" /> 
                    <label for="Username">Username</label>
                    <input type="text" /> 
                    <label for="Password">Password</label>
                    <input type="text" /> 
                    </div>
                    <div>
                    <Link to="/dashboard"><button>Submit</button></Link>
          <Link to="/login"><button>Login</button></Link>
                </ div>
            </ section>
        );
    }
}