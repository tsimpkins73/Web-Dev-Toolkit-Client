import React from 'react'
//import './ForgotPasswordForm.css'
import { Link } from 'react-router-dom';

export default class ForgotPasswordForm extends React.Component {
    render() {
        return (
            <section class="LandingContainer">
                <div class="ForgotPasswordForm"><h1 id="HeaderText">Forgot Password Form Header</h1>
                <label for="Username">Username</label>
                    <input type="text" /> 
                    <label for="Email">Email</label>
                    <input type="text" /> 
                    <Link to="/login"><button>Submit</button></Link>
          <Link to="/sign-up"><button>Sign Up</button></Link>
                </ div>
            </ section>
        );
    }
}