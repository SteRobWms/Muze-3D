import React from 'react'
import RoomTile from './RoomTile'
// import { Modal } from 'react-bootstrap'
// import EditExhibitForm from './EditExhibitForm'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/startbootstrap-heroic-features/css/heroic-features.css'

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

    addRoom = () => {
        fetch(`http://localhost:3000/exhibits/${this.props.match.params.id}/addroom`, {
            method: "POST",
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ exhibit: data })
            })
    }

    addItem = (roomId) => {
        // "/exhibits/:exhibit/rooms/:room/items"
        fetch(`http://localhost:3000/exhibits/${this.props.match.params.id}/rooms/${roomId}/items`, {
            method: "POST",
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ exhibit: data })
            })
    }

    updateroom = (id, formData) => {
        const config = {
            method: "PUT",
            headers: {
                "Authorization": localStorage.getItem("token"),
                "Accept": "application/json"
            },
            body: formData
        }
        return fetch(`http://localhost:3000/exhibits/${this.props.match.params.id}/editroom/${id}`, config)
            .then(res => res.json());
    }

    handleUpdateRoom = (id, event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        this.updateroom(id, formData)
            .then(console.log)
            .catch(console.error)
    }

    deleteRoom = (id) => {
        fetch(`http://localhost:3000/exhibits/${this.props.match.params.id}/deleteroom/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) { alert(data.error) }
                else { this.setState({ exhibit: data }) }
            })
        // .then(alert("Room Deleted Successfully"))
    }

    deleteExhibit = () => {
        fetch(`http://localhost:3000/exhibits/${this.props.match.params.id}`, {
            method: "DELETE",
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) { alert(data.error) }
                else { alert(data.message); window.location.href = `http://localhost:3001/museums/${this.state.exhibit.museum.id}` }
            })
        // .then(alert("Room Deleted Successfully"))
    }

    render() {
        if (this.state.exhibit) {
            return (
                <div className="container">
                    <header className="jumbotron my-4" style={{ backgroundImage: `url(${this.state.exhibit.background_image})` }}>
                        <h1 className="display-3" style={{ color: "white", textShadow: "2px 2px 2px #111111" }}>{this.state.exhibit.name}</h1>
                        <h2 style={{ color: "white", textShadow: "2px 2px 2px #111111" }}>Description: {this.state.exhibit.description}</h2>
                        {/* Link back to the parent Musuem */}
                        <a href={`http://localhost:3001/museums/${this.state.exhibit.museum.id}`}>
                            <h3 style={{ color: "white", textShadow: "2px 2px 2px #111111" }}>Parent Museum: {this.state.exhibit.museum.name}</h3>
                        </a>
                        <br />
                        {/* Test if the user is the owner && if the exhibit has zero rooms. If both are true, display a button to delete the exhibit. Run the first test again below to determine whether to show the "Add Room" button. */}
                        {(this.state.exhibit.creator.id === parseInt(localStorage.user)) && this.state.exhibit.rooms.length === 0
                            ? <button type="button" className="btn btn-primary btn-lg" style={{ color: "white" }} onClick={() => this.deleteExhibit()}>
                                Delete this Exhibit (You must delete its rooms first)
                            </button>
                            : false
                        }
                        {this.state.exhibit.creator.id === parseInt(localStorage.user)
                            ?
                            <button type="button" className="btn btn-primary btn-lg" style={{ color: "white" }} onClick={() => { this.addRoom() }}>
                                Add a Room
                            </button>
                            : false
                        }
                        <div style={{ display: "inline-block", width: "20px" }}></div>
                        <a href={`http://localhost:8081/index.html?exhibit=${this.state.exhibit.id}`}>
                            <button type="button" className="btn btn-primary btn-lg" style={{ color: "white" }}>View Exhibit In VR
                            </button>
                        </a><br /><br />
                    </header>
                    <h2>Rooms</h2>
                    <div className="row text-center">
                        {this.state.exhibit.rooms.length > 0
                            ? this.state.exhibit.rooms.map((room, idx) => {
                                return (

                                    <RoomTile key={idx} {...room} creator={this.state.exhibit.creator.id} deleteRoom={this.deleteRoom} handleUpdateRoom={this.handleUpdateRoom} addItem={this.addItem} updateState={this.updateState} />

                                )
                            })
                            : false
                        }
                    </div>
                </div >
            )
        }
        else { return ("loading...") }
    }
}

{/* <div className="show">
                        <h2>Exhibit: {this.state.exhibit.name}
                            {this.state.exhibit.creator.id === parseInt(localStorage.user)
                                ? <button onClick={() => this.deleteExhibit()}>
                                    Delete this Exhibit (You must delete its rooms first)
                            </button>
                                : false
                            }
                        </h2>
                        <a href={`http://localhost:3001/museums/${this.state.exhibit.museum.id}`}>
                            <h3>Parent Museum: {this.state.exhibit.museum.name}</h3>
                        </a>
                        <a href={`http://localhost:8081/index.html?exhibit=${this.state.exhibit.id}`}>
                            <div style={{ width: "200px", height: "200px", overflow: "hidden" }}>
                                <img style={{ maxWidth: "100%" }} src={this.state.exhibit.background_image} alt={this.state.name} />
                            </div>
                            <h3>View Exhibit In VR</h3>
                        </a>
                        <h3>Description: {this.state.exhibit.description}</h3>
                        <button onClick={() => this.toggleEdit()}>{this.state.showEdit ? "Cancel Edit" : "Edit Description"}</button>
                        <button onClick={() => this.addRoom()}>Add new room</button><br /><br />
                        {this.state.showEdit ? <EditExhibitForm exhibit={this.state.exhibit} toggleEdit={this.toggleEdit} updateState={this.updateState} /> : false}<br />
                        {this.state.exhibit.rooms.length > 0
                            ? this.state.exhibit.rooms.map((room, idx) => {
                                return (
                                    // <h4>Room {room.id}</h4>
                                    // <a href={`http://localhost:3001/rooms/${room.id}`} key={idx}>
                                    <RoomTile {...room} deleteRoom={this.deleteRoom} handleUpdateRoom={this.handleUpdateRoom} addItem={this.addItem} updateState={this.updateState} />
                                    // </a>
                                )
                            })
                            : false
                        }
                        <br />
                    </div>
            )
        } */
}