import React from 'react'
import ResourcePreview from "./ResourcePreview.js";
import './ResourceTypeList.css'

export default class ResourceList extends React.Component {


    render() {
        let resourceType = this.props.resourceType
        if (this.props.searchterm) {
            resources = this.props.resources.filter(resource => resource.text.indexOf(this.props.searchterm) >= 0)
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