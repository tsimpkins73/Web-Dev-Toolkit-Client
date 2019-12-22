import React from 'react'
import './ResourceTypeView.css'
import ResourceTypeView from "./ResourceTypeView.js";
import { Link } from 'react-router-dom';

export default class ResourceTypePreview extends React.Component {


    render(props) {
        console.log(this.props.resourceType);
        let resourceType = this.props.resourceType
        return (
            <section id="resource-full-container">
                <h1 class="resource-section-headline">{this.props.resourceTypeName}</h1>
                <section id="resource-component-container">
                {resourceType.data.map(function (resource) {
                    return <ResourceTypeView resource={resource} />;
                })}
                  </section>
                  <Link to={`/dashboard`}><button>Home</button></Link>
            </section>
        );
    }
}