import React from 'react'
import './css/ResourceTypeView.css'
import './css/ResourceTypeList.css'
import { Link } from 'react-router-dom';

export default class ResourcePreview extends React.Component {


    render(props) {
        // id= {this.props.resource.id};
        let resource = this.props.resource;
            return(
            <section id="resource">
                <div id="resourceImage"><img id="previewImage" alt={"Headline Image for " + resource.headline} src={resource.image} /></div>
                <div id="resourceText">
                    <h3 id="resourceText">{this.props.resource.name}</h3>
                    <p id="resourceText">{this.props.resource.summary}</p>
                    <Link to={this.props.resource.url}><button>Go to Resource</button></Link>
                </div>
            </section>
                );
}
}