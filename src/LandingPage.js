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
          <section id="resourceList">
          <div id="lp-resource-component-container" >
            <div id="resource" ><h1>Resource Type 1</h1>
            <div id="componentImage"></div>
            <div id="componentDescription">
                                <p>Component Description</p>
            </div>
            </div>
        
            <div id="resource" ><h1>Resource Type 2</h1>
            <div id="componentImage"></div>
            <div id="componentDescription">
                                <p>Component Description</p>
            </div>
        </div>
    
            <div id="resource" ><h1>Resource Type 3</h1>
            <div id="componentImage"></div>
            <div id="componentDescription">
                                <p>Component Description</p>
            </div>
        </div>
    
            <div id="resource" ><h1>Resource Type 4</h1>
            <div id="componentImage"></div>
            <div id="componentDescription">
                                <p>Component Description</p>
            </div>
        </div>
    </div>
          </section>
        </div>
      </section>
    );

  }

}
