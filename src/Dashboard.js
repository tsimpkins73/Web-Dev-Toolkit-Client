import React from 'react'
import { Route, Link } from "react-router-dom";
import ResourceTypeList from './ResourceTypeList.js'
import ResourceTypePage from './ResourceTypePage.js'
import './css/Dashboard.css'

export default class Dashboard extends React.Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken();
        this.props.clearUser();
    }


    render() {
        return (<section id="dashboardContainer"><section id="Header">Header</section>
            <section id="navbar"><Link id='navLink' to='/'>
                Logout
        </Link>
               <label for="searchBar">Search Bar</label>
                <input type="text" className="input" name="searchTerm" placeholder="Search..." />
                <Link id='navLink' to='/dashboard/favorites'>Favorites</Link></section>
            <section id="mainContentContainer">
                <Route exact path={'/dashboard'} render={(props) => { return <ResourceTypeList resources={this.props.resources} types={this.props.types} searchTerm={this.props.searchterm} />} />
                <Route path={'/dashboard/resource/:type'} render={(props) => {
                    let resourceType = (types.find(a => a.name === props.match.params.type));
                    let resourcesForTypes = this.props.resourcesForTypes;
                    let thisTypeResourceIDs= resourceType.filter(type => type.id == resourceForTypes.type_id ) ;
                    console.log(resource)
                    return <ResourceTypePage resourceType={resource} resourceTypeName={resource.name} handleFavoriteButton={() => this.handleFavoriteButton(resource)} />
                }} />
                <Route path={'/dashboard/favorites'} render={(props) => {
                    let resources =               
                    (this.state.resources.filter(resource => resource.favorite));
                    console.log(resource)
                    return <ResourceTypePage resourceType={resource} resourceTypeName='Favorites' handleFavoriteButton={() => this.handleFavoriteButton(resource)} />
                }} />
            </section>
        </section>
        );
    }
}
