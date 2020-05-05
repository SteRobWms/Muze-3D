import React from 'react'

export default class RoomTile extends React.Component {

    render() {
        return (
            <a className="list" href={`http://localhost:3001/rooms/${this.props.id}`}>
                <div className="tile" style={{ border: "solid black 1px", width: "90%" }}>
                    <h2>Room Name: {this.props.name ? this.props.name : "none provided"}</h2>
                    <img src={`../../public/${this.props.img_prefix}/${this.props.image}.jpg`} alt={this.props.name} />
                    {/* <h3>src={`../../public/${this.props.img_prefix}/${this.props.image}.jpg`}</h3> */}
                    {this.props.museum ? <h3>Museum: {this.props.museum.name}</h3> : false}
                    {this.props.exhibit ? <h3>Exhibit: {this.props.exhibit.name}</h3> : false}
                </div>
            </a>
        )
    }
}