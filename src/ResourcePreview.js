import React from 'react'
<<<<<<< HEAD
import './ResourceView.css'
=======
import './ResourceTypeView.css'
import './ResourceTypeList.css'
>>>>>>> c34f882f802eef15e80ef308621039fe2e69dbb4
import { Link } from 'react-router-dom';

export default class ResourcePreview extends React.Component {


    render(props) {
        // id= {this.props.resource.id};
            return(
            <section id="resource">
                <div id="resourceImage">{this.props.resource.image}</div>
                <div id="resourceText">
                    <h3 id="resourceText">{this.props.resource.name}</h3>
                    <p id="resourceText">{this.props.resource.summary}</p>
                    <Link to={this.props.resource.url}><button>Go to Resource</button></Link>
                </div>
            </section>
                );
}
}