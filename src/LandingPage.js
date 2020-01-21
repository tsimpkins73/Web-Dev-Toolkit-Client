import React from 'react'
import { Link } from 'react-router-dom';
import ResourceTypeView from "./ResourceTypeView.js";
import './css/LandingPage.css'

export default class LandingPage extends React.Component {

handleURLButton = (resourceURL) => {
        window.location.href= resourceURL;
    
}

  render() {
    let resources = this.props.resources;
    return (
      <section class="LandingContainer">
        
         <div class="loginFormHeader"><h1 id="HeaderText">Web Dev Toolkit</h1>
          <p>A Web Dev resource one-stop shop. Videos, tutorials, courses, and online utilities amassed in one convenient location.</p>
          <div id="resourceButtons">
            <Link to="/sign-up"><button>Sign Up</button></Link>
            <Link to="/login"><button>Login</button></Link>
          </div>
          </div>
          <section id="resourceList">
            <div id="lp-resource-component-container" >
              {resources.slice(0,4).map(function (resource) {
                 return <ResourceTypeView resource={resource} handleFavoriteButton={() => this.props.handleFavoriteButton(resource)}/>;})
              }
          </div>
          </section>
    
      </section>
    );

  }

}
