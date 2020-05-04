import React from 'react'

export default class MuseumTile extends React.Component {

    render() {
        return (
            <a className="list" href={`http://localhost:3001/museums/${this.props.id}`}>
                <div className="tile" style={{ border: "solid black 1px", width: "90%" }}>
                    <h2>Museum Name: {this.props.name}</h2>
                    <img src={this.props.background_image} alt={this.props.name} />
                    <h3>City: {this.props.city}</h3>
                    <h3>Country: {this.props.country}</h3>
                    <h3>Category: {this.props.category}</h3>
                </div>
            </a>
        )
    }
}