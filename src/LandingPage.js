import React from 'react'
import { Link } from 'react-router-dom';
import './LandingPage.css'

export default class LandingPage extends React.Component {
  render() {
    return (
      <section class="LandingContainer">
        <div><h1 id="HeaderText">Blog Name</h1>
          <p>Blog description & explanation</p>
          <div>
          <Link to="/sign-up"><button>Sign Up</button></Link>
          <Link to="/login"><button>Login</button></Link>
          </div>
          <div class="lpArticlet">
            <h1 id="HeaderText">Newest Blog Post</h1>
            <div id="articleImage"></div>
            <div id="articleText">
                <h3>Article Headline</h3>
                <p>Article Text</p>
            </div>
          </div>
        </div>
      </section>
    );

  }

}
