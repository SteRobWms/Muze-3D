import React from 'react'
import ItemTile from './ItemTile'
import RoomTile from './RoomTile'

export default class Exhibit extends React.Component {

    state = {
        showEdit: false
    }

    componentDidMount() {
        fetch(`http://localhost:3000/exhibits/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ exhibit: data })
            })
    }

    toggleEdit = () => {
        this.setState({
            showEdit: !this.state.showEdit
        })
    }

    render() {
        if (this.state.exhibit) {
            return (
                <div className="show">
                    <button onClick={() => this.toggleEdit()}>Edit Exhibit / Add Rooms</button>
                    <h3>Name: {this.state.exhibit.name}</h3>
                    <img style={{ maxWidth: "500px", maxHeight: "500px" }} src={this.state.exhibit.background_image} alt={this.state.name} />
                    <h3>Description: {this.state.exhibit.description}</h3>
                    <h3>Museum: {this.state.exhibit.museum.name}</h3>
                    {this.state.exhibit.items.length > 0
                        ? this.state.exhibit.items.map((item, idx) => {
                            return (
                                <a href={`http://localhost:3001/items/${item.id}`} key={idx}>
                                    <ItemTile {...item} />
                                </a>
                            )
                        })
                        : false
                    }
                    {this.state.exhibit.rooms.length > 0
                        ? this.state.exhibit.rooms.map((room, idx) => {
                            return (
                                <a href={`http://localhost:3001/rooms/${room.id}`} key={idx}>
                                    <RoomTile {...room} />
                                </a>
                            )
                        })
                        : false
                    }
                </div>
            )
        }
        else { return ("loading...") }
    }
}