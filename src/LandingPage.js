import React from 'react'
import { Link } from 'react-router-dom';
import './css/LandingPage.css'

export default class LandingPage extends React.Component {
  render() {
    let resources = this.state.resources;
    console.log(resources);
    return (
      <section class="LandingContainer">
        <div><h1 id="HeaderText">Blog Name</h1>
          <p>Blog description & explanation</p>
          <div>
            <Link to="/sign-up"><button>Sign Up</button></Link>
            <Link to="/login"><button>Login</button></Link>
          </div>
          <section id="resourceList">
            <div id="lp-resource-component-container" >
              {resources.slice(0,3).map(function (resource) {
                return             <section id="resource">
                <div id="resourceImage"><img id="previewImage" alt={"Headline Image for " + resource.headline} src={resource.image} /></div>
                <div id="resourceText">
                  <h3 id="resourceText">{resource.name}</h3>
                  <p id="resourceText">{resource.summary}</p>
                  <Link to={resource.url}><button>Go to Resource</button></Link>
                </div>
              </section>})
              }
          </div>
          </section>
        </div>
      </section>
    );

  }

}
