import React from 'react'
import ResourceTypePreview from "./ResourceTypePreview.js";
import './ResourceTypeList.css'

export default class ResourceList extends React.Component {


    render() {
        let resources = this.props.resources
        console.log(resources);
        if (this.props.searchterm) {
            resources = this.props.resources.filter(resource => resource.text.indexOf(this.props.searchterm) >= 0)
        }
        return (
            <section id="resourceList">
                {resources.map(function (resourceType) {
                    return <ResourceTypePreview resourceType={resourceType} />;
                })}
            </section>
        );
    }
}