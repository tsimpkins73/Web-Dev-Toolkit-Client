import React from 'react'
import './css/ResourceTypeView.css'
import ResourceTypeView from "./ResourceTypeView.js";
import { Link } from 'react-router-dom';

export default class ResourceTypePreview extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          typeResources: [],
        };
      }


    getResourcesForTypes = (typeID) => {
        let typeID = typeID
        fetch(`${API_BASE_URL}/resources/byType/${typeID}`)
          .then(response => response.json())
          .then((typeResources) => { this.setState({ typeResources }); });
      }

      componentDidMount() {
      let resourceType = this.props.resourceType;
      this.getResourcesForTypes(resourceType.id)


    render(props) {
         console.log(this.props.resourceType);
        let resourceType = this.props.resourceType;
        let resourceForTypes = this.props.resourceForTypes;
        let thisTypeResourceIDs= resourceType.filter(type => type.id == resourceForTypes.type_id ) ;
        let typeResources = this.state.typeResources;
        return (
            <section id="resource-full-container">
                <h1 class="resource-section-headline">{resourceType.name}</h1>
                <section id="resource-component-container">
                {typeResources.map(function (resource) {
                    return <ResourceTypeView resource={resource} />;
                })}
                  </section>
            </section>
        );
    }
}