
import React from 'react'
import './css/ResourceTypeView.css'

export default class ResourceTypeView extends React.Component {



    render() {
        console.log(this.props.resource);
        let resource = this.props.resource
/*         let typeResources= this.props.typeResources
        let currentResource = resources.filter(resource = resource.id == resourceID)  */
        return (
            <div id="resource-full" >
                <section id="resource-Full">
                    <div id="resourceImage"><img id="previewImage" alt={"Headline Image for " + resource.headline} src={resource.image} /></div>
                    <div id="resourceText">
                        <h3 id="resourceText">{resource.headline}</h3>
                        <p id="resourceText">{resource.summary}</p>
                    </div>
                    <div id="resourceButtons">
                        <button onClick={this.props.handleFavoriteButton}>Favorite Button</button>
                    </div>
                </section>
            </div >
        );
    }
}

/* resourceView.defaultProps = {
    resource: {}
} */