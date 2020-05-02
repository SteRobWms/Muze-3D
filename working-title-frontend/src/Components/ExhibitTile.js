import React from 'react'

export default class ExhibitTile extends React.Component {

    render() {
        return (
            <div style={{ border: "solid black 1px", width: "90%" }}>
                <h2>Name: {this.props.name}</h2>
                <img src={this.props.background_image} alt={this.props.name} />
                <h3>City: {this.props.city}</h3>
                <h3>Country: {this.props.country}</h3>
                <h3>Category: {this.props.category}</h3>
            </div>
        )
    }
}