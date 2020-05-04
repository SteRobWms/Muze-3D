import React from 'react'

export default class ExhibitTile extends React.Component {

    render() {
        return (
            <a className="list" href={`http://localhost:3001/exhibits/${this.props.id}`}>
                <div className="tile" style={{ border: "solid black 1px", width: "90%" }}>
                    <h2>Exhibit Name: {this.props.name}</h2>
                    <img src={this.props.background_image} alt={this.props.name} />
                    <h3>Description: {this.props.description}</h3>
                    <h3>City: {this.props.museum.city}</h3>
                    <h3>Country: {this.props.museum.country}</h3>
                </div>
            </a>
        )
    }
}