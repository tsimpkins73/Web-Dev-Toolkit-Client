import React from 'react'
import { Link } from 'react-router-dom';
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
            <div id="resource-Full">
                    <div id="resourceImage"><img id="previewImage" alt={"Headline Image for Tutorials"} src={"/images/Tutorials.svg"} /></div>
                    <div id="resourceText">
                        <h3 id="resourceText">Tutorials</h3>
                                    </div>
                    <div id="resourceButtons">
                    <Link to="/dashboard/resource/tutorials"><button>View Tutorials</button></Link>
                    </div>
                </div>

                <div id="resource-Full">
                    <div id="resourceImage"><img id="previewImage" alt={"Headline Image for Courses"} src={"/images/Courses.svg"} /></div>
                    <div id="resourceText">
                        <h3 id="resourceText">Courses</h3>
                                    </div>
                    <div id="resourceButtons">
                    <Link to="/dashboard/resource/courses"><button>View Courses</button></Link>
                    </div>
                </div>

                <div id="resource-Full">
                    <div id="resourceImage"><img id="previewImage" alt={"Headline Image for Videos"} src={"/images/Videos.svg"} /></div>
                    <div id="resourceText">
                        <h3 id="resourceText">Videos</h3>
                                    </div>
                    <div id="resourceButtons">
                    <Link to="/dashboard/resource/videos"><button>View Videos</button></Link>
                    </div>
                </div>

                <div id="resource-Full">
                    <div id="resourceImage"><img id="previewImage" alt={"Headline Image for Utilities"} src={"/images/Utilities.svg"} /></div>
                    <div id="resourceText">
                        <h3 id="resourceText">Utilities</h3>
                                    </div>
                    <div id="resourceButtons">
                    <Link to="/dashboard/resource/utilities"><button>View Utilities</button></Link>
                    </div>
                </div>
          </div>
          </section>
    
      </section>
    );

  }

}
