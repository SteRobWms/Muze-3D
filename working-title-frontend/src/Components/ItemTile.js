import React from 'react'

export default class ItemTile extends React.Component {

    render() {
        return (
            <a className="list" href={`http://localhost:3001/items/${this.props.id}`}>
                <div className="tile" style={{ border: "solid black 1px", width: "90%" }}>
                    <h2>Item Name: {this.props.name ? this.props.name : "none provided"}</h2>
                    <img src={this.props.image} alt={this.props.name} />
                    <h3>{this.props.year_of_origin ? this.props.year_of_origin : "unknown"}</h3>
                    <h3>Item Code: {this.props.item_code ? this.props.item_code : "n/a"}</h3>
                    <h3>Creator/Source: {this.props.creator ? this.props.creator : "unknown"}</h3>
                    {this.props.museum ? <h3>Museum: {this.props.museum.name}</h3> : false}
                    {this.props.exhibit ? <h3>Exhibit: {this.props.exhibit.name}</h3> : false}
                </div>
            </a>
        )
    }
}