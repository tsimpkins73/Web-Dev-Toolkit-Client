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
            resourceType:''
        };
    }


    getResourcesForTypes = (typeID) => {
        fetch(`${API_BASE_URL}/resources/byType/${typeID}`)
            .then(response => response.json())
            .then((typeResources) => { this.setState({ typeResources }); });
    }

    componentDidMount() {
        let resourceType = this.props.resourceType;
        if (this.props.favoriteResources) {
            this.setState({ typeResources: this.props.favoriteResources,
            resourceType:"Favorites" })
        }
        if (this.props.searchTerm) {
            this.setState({ typeResources: this.props.searchResources,
            resourceType:"Results"})
        }
        else {
            this.getResourcesForTypes(resourceType.id);
            this.setState({ resourceType: this.props.resourceType.name })
        }
    };

    componentWillUnmount() {
 /*        this.props.clearSpecialResources(); */
    }

    componentWillReceiveProps(newProps) {
        if(newProps.favoriteResources){
            this.setState(this.setState({ typeResources: this.props.favoriteResources }))
        }if(newProps.searchResources) {
            this.setState(this.setState({ typeResources: this.props.searchResources }))
        }if(newProps.resourceType !== this.props.resourceType){
            this.getResourcesForTypes(newProps.resourceType.id);
        }if(this.props.resourceType){
            this.getResourcesForTypes(this.props.resourceType.id);
        }
        else{
            this.setState(this.setState({ typeResources: []}))
        }

    }

    render(props) {
        console.log(this.props.resourceType);
        let resourceType = this.state.resourceType;
        let typeResources = this.state.typeResources;
        return (
            <section id="resource-full-container">
                <h1 class="resource-section-headline">{resourceType}</h1>
                <section id="resource-component-container">
                    {typeResources.map(function (resource) {
                        return <ResourceTypeView resource={resource} handleFavoriteButton={() => this.props.handleFavoriteButton(resource)} />;
                    })}
                </section>
            </section>
        );
    }
}