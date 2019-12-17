import React from 'react'
import './ResourceTypeView.css'
import ResourceTypeView from "./ResourceTypeView.js";


export default class ResourceTypePreview extends React.Component {


    render(props) {
        console.log(this.props.resourceType);
        let resourceType = this.props.resourceType
        return (
<<<<<<< HEAD
            <section id="resourceList">
                {resourceType.filter(function (resource) {
                    return <ResourceTypeView resource={resource} />;
                })}
=======
            <section id="resource-full-container">
                <h1 class="resource-section-headline">{resourceType.name}</h1>
                <section id="resource-component-container">
                {resourceType.data.map(function (resource) {
                    return <ResourceTypeView resource={resource} />;
                })}
                  </section>
>>>>>>> c34f882f802eef15e80ef308621039fe2e69dbb4
            </section>
        );
    }
}