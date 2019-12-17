import React from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css'

export default class FavoritesLink extends React.Component {
    render() {
        return (
            <Link to={"/dashboard/resource/" + this.props.favoriteID}><h3>{this.props.headline}</h3></Link>
        );
    }
}