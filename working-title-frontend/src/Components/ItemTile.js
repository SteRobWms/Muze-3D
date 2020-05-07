import React from 'react'

export default class ItemTile extends React.Component {

    render() {
        return (
            // <a className="list" href={`http://localhost:3001/items/${this.props.id}`}>
            <div className="tile" style={{ border: "solid black 1px", width: "90%" }}>
                {/* <h2>Item Name: {this.props.name ? this.props.name : "none provided"}</h2> */}
                <a href={this.props.image}><img style={{ maxWidth: "100px" }} src={this.props.image} alt={this.props.name} /></a>
                {/* <h3>src={`../../public/${this.props.img_prefix}/${this.props.image}.jpg`}</h3> */}
                <ul>
                    <li>Creator/Source: {this.props.creator ? this.props.creator : "unknown"}</li>
                    <li>Description: {this.props.description ? this.props.description : "unknown"}</li>
                    <li>Year: {this.props.year_of_origin ? this.props.year_of_origin : "unknown"}</li>
                    <li>Item Code: {this.props.item_code ? this.props.item_code : "n/a"}</li>
                </ul>
            </div>
            // </a>
        )
    }
}