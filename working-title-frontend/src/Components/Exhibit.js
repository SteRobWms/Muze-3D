import React from 'react'
import RoomTile from './RoomTile'
import EditExhibitForm from './EditExhibitForm'

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

    updateState = (exhibit) => {
        this.setState({
            exhibit
        })
    }

    toggleEdit = () => {
        this.setState({
            showEdit: !this.state.showEdit
        })
    }

    render() {
        if (this.state.exhibit) {
            if (this.state.showEdit) {
                return (
                    <EditExhibitForm exhibit={this.state.exhibit} toggleEdit={this.toggleEdit} updateState={this.updateState} />
                )
            }
            else {
                return (
                    <div className="show">
                        <h2>Exhibit: {this.state.exhibit.name}</h2>
                        <h3>Parent Museum: {this.state.exhibit.museum.name}</h3>
                        <button onClick={() => this.toggleEdit()}>Edit Exhibit / Add Rooms</button><br /><br />
                        <div style={{ width: "200px", height: "200px", overflow: "hidden" }}><img style={{ maxWidth: "100%" }} src={this.state.exhibit.background_image} alt={this.state.name} /></div>
                        <h3>Description: {this.state.exhibit.description}</h3>
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
        }
        else { return ("loading...") }
    }
}