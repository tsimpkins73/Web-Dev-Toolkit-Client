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
    handleSearchSubmit=(e) => {
        this.props.handleSearchForm(e)
        const url = 'dashboard/search/'+ e.currentTarget.searchTerm.value;
        window.location.href=url;
          }


    render() {
        return (<section id="dashboardContainer">
            <section id="Header"><h1 class="lpHeaderText">Web Dev Toolkit</h1></section>
            <section id="navbar"><Link id='navLink' onClick={this.handleLogoutClick} to='/'>
                    Logout
        </Link>
        <Link id='navLink' to='/dashboard'>
                    Home
        </Link>
        <form onSubmit={this.handleSearchSubmit}>
                <input type="text" className="input" name="searchTerm" placeholder="Search..." />
                <button type="submit">Search</button>
                </form>
                <Link id='navLink' to='/dashboard/favorites'>Favorites</ Link></section>
            <section id="mainContentContainer">
                <Route exact path={'/dashboard'} render={(props) => { return <ResourceTypeList resources={this.props.resources} types={this.props.types} searchTerm={this.props.searchterm} /> }} />
                <Route path={'/dashboard/resource/:type'} render={(props) => {
                    let types = this.props.types;
                    let resourceType = (types.find(a => a.name === props.match.params.type));
                    console.log(resourceType)
                    return <ResourceTypePage resourceType={resourceType} resourceTypeName={resourceType.name} handleFavoriteButton={this.props.handleFavoriteButton} />
                }} />
                <Route path={'/dashboard/search/:searchterm'} render={(props) => {
                    const searchTerm = props.match.params.searchterm
                    console.log(searchTerm)
                    let searchResources = (this.props.resources.filter(resource => resource.summary.indexOf(props.match.params.searchterm) || resource.headline.indexOf(props.match.params.searchterm)>= 0));
                    console.log(searchResources)
                    return <ResourceTypePage searchResources={searchResources} searchTerm={searchTerm} resourceTypeName={searchTerm} handleFavoriteButton={this.props.handleFavoriteButton} />
                }} />
                <Route path={'/dashboard/favorites'} render={(props) => {
                    let favoriteResources = (this.props.resources.filter(resource => resource.favorite));
                    console.log(favoriteResources)
                    return <ResourceTypePage favoriteResources={favoriteResources} resourceTypeName='Favorites' handleFavoriteButton={this.props.handleFavoriteButton} />
                }} />
            </section>
        </section>
        );
    }
}
