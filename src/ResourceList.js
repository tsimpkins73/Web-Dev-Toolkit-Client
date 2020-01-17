import React from 'react'
import ResourcePreview from "./ResourcePreview.js";
import './css/ResourceTypeList.css'

export default class ResourceList extends React.Component {


    render() {
        let resourceType = this.props.resourceType
             return (
            <section id="resourceList">
                {resourceType.map(function (resource) {
                    return <ResourcePreview resource={resource} />;
                })}
            </section>
        );
    }
}