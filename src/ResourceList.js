import React from 'react'
import ResourcePreview from "./ResourcePreview.js";
import './ResourceTypeList.css'

export default class ResourceList extends React.Component {


    render() {
        let resourceType = this.props.resourceType
        if (this.state.showFavorites) {
            resourceType = this.props.resourceType.filter(resource => resource.data.favorite)
        }
        return (
            <section id="resourceList">
                {resourceType.map(function (resource) {
                    return <ResourcePreview resource={resource} />;
                })}
            </section>
        );
    }
}