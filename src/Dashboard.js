import React from 'react'
import { Route, Link } from "react-router-dom";
import ResourceTypeList from './ResourceTypeList.js'
import ResourceTypePage from './ResourceTypePage.js'
import './css/Dashboard.css'
import TokenService from './services/token-service'

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
                <Link id='navLink' to='/dashboard/favorites'>Favorites</ Link></section>
            <section id="mainContentContainer">
                <Route exact path={'/dashboard'} render={(props) => { return <ResourceTypeList resources={this.props.resources} types={this.props.types} searchTerm={this.props.searchterm} /> }} />
                <Route path={'/dashboard/resource/:type'} render={(props) => {
                    let types= this.props.types;
                    let resourceType = (types.find(a => a.name === props.match.params.type));
                    console.log(resourceType)
                    return <ResourceTypePage resourceType={resourceType} resourceTypeName={resourceType.name}  handleFavoriteButton={this.props.handleFavoriteButton} />
                }} />
                <Route path={'/dashboard/favorites'} render={(props) => {
                    let favoriteResources= (this.props.resources.filter(resource => resource.favorite));
                    console.log(favoriteResources)
                    return <ResourceTypePage favoriteResources={favoriteResources} resourceTypeName='Favorites' handleFavoriteButton={this.props.handleFavoriteButton} />
                }} />
            </section>
        </section>
        );
    }
}
