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
    handleSearchSubmit = (e) => {
        this.props.handleSearchForm(e)
        const url = '/dashboard/search/' + e.currentTarget.searchTerm.value;
        this.props.history.push(url);
    }


    render() {
        return (<section id="dashboardContainer">
            <section id="Header"><h1 id="dashboardHeaderText">Web Dev Toolkit</h1>
            <section id="navbar"><Link id='navLink' onClick={this.handleLogoutClick} to='/'>
                Logout
        </Link>
                <Link id='navLink' to='/dashboard'>
                    Home
        </Link>
                <form onSubmit={this.handleSearchSubmit}>
                    <input type="text" className="input" name="searchTerm" placeholder="Search..." />
                    <button className="searchButton" type="submit">Search</button>
                </form>
                <Link id='navLink' to='/dashboard/favorites'>Favorites</ Link></section>
            </section>
            <section id="mainContentContainer">
                <Route exact path={'/dashboard'} render={(props) => { return <ResourceTypeList resources={this.props.resources} types={this.props.types} searchTerm={this.props.searchterm} /> }} />
                <Route path={'/dashboard/resource/:type'} render={(props) => {
                    let types = this.props.types;
                    let resourceType = (types.find(a => a.name === props.match.params.type));
                    console.log(types);
                    console.log(resourceType);
                    return <ResourceTypePage resourceType={resourceType} resourceTypeName={resourceType.name} handleFavoriteButton={this.props.handleFavoriteButton} />
                }} />
                <Route path={'/dashboard/search/:searchterm'} render={(props) => {
                    const searchTerm = props.match.params.searchterm
                    let searchResources = (this.props.resources.filter(resource => resource.summary.indexOf(props.match.params.searchterm) >= 0 || resource.headline.indexOf(props.match.params.searchterm) >= 0));
                    return <ResourceTypePage searchResources={searchResources} searchTerm={searchTerm} resourceTypeName={searchTerm} handleFavoriteButton={this.props.handleFavoriteButton} />
                }} />
                <Route path={'/dashboard/favorites'} render={(props) => {
                    let resourceType = {name: "Favorites"};
                    let favoriteResources = (this.props.resources.filter(resource => resource.favorite));
                    return <ResourceTypePage favoriteResources={favoriteResources} resourceType={resourceType} handleFavoriteButton={this.props.handleFavoriteButton} />
                }} />
            </section>
        </section>
        );
    }
}
