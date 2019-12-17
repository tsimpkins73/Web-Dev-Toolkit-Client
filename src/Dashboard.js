import React from 'react'
import { Route } from "react-router-dom";
import ResourceTypeList from './ResourceTypeList.js'
import ResourceTypeView from './ResourceTypeView.js'
import './Dashboard.css'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resources:
                [
                    {id:"1",
                        name: "Tutorials",
                        data: [{ id: "1", headline: "a string", summary: "resource 1 summary is a summary iof resource 1. This will hold a small snippet of the resource's text", text: "", comments: [""], categories: ["Tutorial"], image: "IMAGE 1 URL", favorite: false },]
                    },
                    {
                        id:"2",
                        name: "Videos",
                        data: [{ id: "2", headline: "another string", summary: "resource 2 summary is a summary iof resource 2. This will hold a small snippet of the resource's text", text: "", comments: [""], categories: ["News", "New Technology"], image: "IMAGE 2 URL", favorite: true },]
                    },
                    {
                        id:"3",
                        name: "Courses",
                        data: [{ id: "3", headline: "a string", summary: "resource 3 summary is a summary iof resource 3. This will hold a small snippet of the resource's text", text: "", comments: [""], categories: ["Tutorial"], image: "IMAGE 3 URL", favorite: true },]
                    },
                    {
                        id:"4",
                        name: "Utilities",
                        data: [{ id: "3", headline: "a string", summary: "resource 3 summary is a summary iof resource 3. This will hold a small snippet of the resource's text", text: "", comments: [""], categories: ["Tutorial"], image: "IMAGE 3 URL", favorite: true },]
                    },

                ]
        };
    }

    handleFavoriteButton = (resource) => {
        resource.favorite = !resource.favorite
        this.setState({
            resources: this.state.resources
        })
    }

    handleSearchForm = (event) => {
        event.preventDefault()
        const term = event.currentTarget.searchTerm.value
        this.setState({
            searchterm: term
        })
        console.log(this.state.searchterm)
    }

    render() {
        return (<section id="dashboardContainer"><section id="Header">Header</section>
            <section id="navbar">navbar <label for="searchBar">Search Bar</label>
                <input type="text" className="input" name="searchTerm" placeholder="Search..." /> Favorites Links</section>
            <section id="mainContentContainer">
                <Route exact path={'/dashboard'} component={() => <ResourceTypeList resources={this.state.resources} searchTerm={this.state.searchterm} />} />
                <Route path={'/dashboard/resource/:type'} render={(props) => {
                    let resource = (this.state.resources.find(a => a.type === props.match.params.type));
                    console.log(resource)
                    return <ResourceTypeView resource={resource} handleFavoriteButton={() => this.handleFavoriteButton(resource)} />
                }} />
            </section>
        </section>
        );
    }
}
