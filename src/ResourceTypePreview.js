import React from 'react'
import './css/ResourceTypeView.css'
import ResourceTypeView from "./ResourceTypeView.js";
import { Link } from 'react-router-dom';
import { API_BASE_URL } from './config'

export default class ResourceTypePreview extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          typeResources: [],
        };
      }


    getResourcesForTypes = (typeID) => {
        fetch(`${API_BASE_URL}/resources/byType/${typeID}`)
          .then(response => response.json())
          .then((typeResources) => { this.setState({ typeResources }); });
      }

      componentDidMount() {
      let resourceType = this.props.resourceType;
      console.log(resourceType.id);
      this.getResourcesForTypes(resourceType.id);
      }

      

    render(props) {
        console.log(this.props.resourceType);
        let resourceType = this.props.resourceType;
        let typeResources = this.state.typeResources;
        console.log(resourceType);
        console.log(typeResources);
        return (
            <section id="resource-full-container">
                <h1 class="resource-section-headline">{resourceType.name}</h1>
                <section id="resource-component-container">
                {typeResources.slice(0, 4).map(function (resource) {
                    return <ResourceTypeView resource={resource} handleFavoriteButton={() => this.props.handleFavoriteButton(resource)}/>;
                })}
                  </section>
                  <Link to={`/dashboard/resource/${this.props.resourceType.name}`}><button>View All</button></Link>
            </section>
        );
    }
}