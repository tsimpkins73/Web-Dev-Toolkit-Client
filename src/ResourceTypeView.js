
import React from 'react'
import './ResourceTypeView.css'

export default class ResourceTypeView extends React.Component {



    render() {
        console.log(this.props.resource);
        return (
<<<<<<< HEAD
            <div id="resource-full-container" >
=======
            <div id="resource-full" >
>>>>>>> c34f882f802eef15e80ef308621039fe2e69dbb4
                <section id="resource-Full">
                    <div id="resourceImage">{this.props.resource.image}</div>
                    <div id="resourceText">
                        <h3 id="resourceText">{this.props.resource.headline}</h3>
                        <p id="resourceText">{this.props.resource.text}</p>
                    </div>
                    <div id="resourceButtons">
                        <button onClick={this.props.handleFavoriteButton}>Favorite Button</button>
                    </div>
                </section>
            </div >
        );
    }
}

/* resourceView.defaultProps = {
    resource: {}
} */