import React from 'react'
import './css/Sidebar.css'

export default class SearchDiv extends React.Component {
    render() {

        return (
            <div id="searchDiv">
            <form onSubmit={this.props.handleSearchForm}>
                <input type="text" className="input" name="searchTerm" placeholder="Search..." />
                <button type="submit">Search</button>
                </form>
          </div>
        );
    }
}