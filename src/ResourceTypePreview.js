import React from 'react'
import './ResourceTypeView.css'
import ResourceTypeView from "./ResourceTypeView.js";


export default class ResourceTypePreview extends React.Component {


    render(props) {
        console.log(this.props.resourceType);
        let resourceType = this.props.resourceType
        return (
            <section id="resourceList">
                <h1>{resourceType.name}</h1>
                {resourceType.data.map(function (resource) {
                    return <ResourceTypeView resource={resource} />;
                })}
            </section>
        );
    }
}