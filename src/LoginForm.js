import React from 'react'
import './css/LoginForm.css'
import { Link } from 'react-router-dom';
import UserService from './services/user-service'

export default class LoginForm extends React.Component {
  state = { error: null }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { username, password } = ev.target

    UserService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        username.value = ''
        password.value = ''
        this.props.onLoginSuccess(res.username)
        this.props.history.push('/dashboard')
      })
      .catch(res => {
        this.setState({ error: res.error })

      })
  }


  render() {


    return (
      <section class="LandingContainer">
        <div class="LoginForm" > 
        <div class="loginFormHeader">
          <h1 class="lpHeaderText"> Welcome, Please Sign In! </h1>
         <p> Guests, please login with 
           Username: GenBlanc and Password: Password34!</p>
         </div>
                    <form onSubmit={this.handleSubmitJwtAuth} className='RegistrationForm' >
            <div class='formLine'>
              <label for="username" > Username </label>
              <input type="text" name="username" />
            </div>
            <div class='formLine'>
              <label for="password" > Password </label>
              <input type="password" name="password" />
              <br />
            </div>
            <div class='signupButtons'>
              <button class="lpButton" >Submit</button>
              <Link to="/sign-up"><button class="lpButton" >Sign Up</button></Link>
              <div>{this.state.error}</div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}