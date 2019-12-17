import React from 'react'
import './LoginForm.css'
import { Link } from 'react-router-dom';

export default class LoginForm extends React.Component {
    render() {
        return (
            <section class="LandingContainer">
                <div class="LoginForm" > <h1 id="HeaderText"> Login Form Header </h1>
                <div>
                    <label for="Username" > Username </label>
                    <input type="text" />
                    <label for="Password" > Password </label>
                    <input type="text" />
                    <br />
                    </div>
                    <div>
                    <Link to="/dashboard"><button>Submit</button></Link>
                    <Link to="/forgot-password"><button>Forgot Password</button></Link>
                    <Link to="/sign-up"><button>Sign Up</button></Link>
                    </div>
                </div>
            </section>
        );
    }
}