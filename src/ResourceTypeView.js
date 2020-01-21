
import React from 'react'
import './css/ResourceTypeView.css'
import { Link } from 'react-router-dom';

export default class ResourceTypeView extends React.Component {

handleURLButton = (resourceURL) => {
        window.location.href= resourceURL;
    
}

    render() {
        let resource = this.props.resource;
        let resourceType = this.props.resourceType;
/*         let typeResources= this.props.typeResources
        let currentResource = resources.filter(resource = resource.id == resourceID)  */
        return (
                <div id="resource-Full">
                    <div id="resourceImage"><img id="previewImage" alt={"Headline Image for " + resource.headline} src={resourceType.type_image} /></div>
                    <div id="resourceText">
                        <h3 id="resourceText">{resource.headline}</h3>
                        <p id="resourceText">{resource.summary}</p>
                    </div>
                    <div id="resourceButtons">
               <button onClick={this.handleURLButton.bind(this, resource.url)} >Go to Resource</button><button onClick={this.props.handleFavoriteButton}>Favorite Button</button>
                    </div>
                </div>
        );
    }
}

