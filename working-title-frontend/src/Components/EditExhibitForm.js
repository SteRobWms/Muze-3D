import React from 'react'

export default class EditExhibitForm extends React.Component {

    url = window.location.href
    urlArr = this.url.split("/")
    id = this.urlArr[this.urlArr.length - 1]

    state = {
        rooms: [],
        editMode: true
    }

    addRoom = () => {
        this.setState({
            rooms: this.state.rooms.push({
                exhibit_id: this.id,
            })
        })
    }
    removeRoom = () => {
        this.setState({
            rooms: this.state.rooms.slice(0, this.state.rooms.length - 1)
        })
    }

    toggleMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    updateExhibit = (formData) => {
        const config = {
            method: "PATCH",
            headers: {
                "Authorization": localStorage.getItem("token"),
                "Accept": "application/json"
            },
            body: formData
        }
        return fetch(`http://localhost:3000/exhibits/${this.id}`, config)
            .then(res => res.json());
    }

    handleEditSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        // event.target.reset
        this.updateExhibit(formData)
            .then(exhibit => this.props.updateState(exhibit))
            .catch(console.error);
    }

    render() {
        return (
            <div>
                <h2>Editing Exhibit: {this.props.exhibit.name}</h2>
                <h3>Parent Museum: {this.props.exhibit.museum.name}</h3>
                <button onClick={() => this.props.toggleEdit()}>Cancel</button><br /><br />
                {this.state.editMode === true
                    ?
                    <div>
                        <button onClick={() => this.toggleMode()}>Add Rooms</button>
                        <form onSubmit={(event) => { this.handleEditSubmit(event); this.props.toggleEdit() }}>
                            <label>Change Description</label>
                            <input name="description" type="text" placeholder={this.props.exhibit.description} />
                            <input type="submit" value="Save Changes" />
                        </form>
                    </div>
                    :
                    <div>
                        <button onClick={() => this.toggleMode()}>Edit Exhibit</button>
                        <form onSubmit={(event) => { this.handleRoomSubmit(event) }}>
                            <button onClick={() => this.addRoom}>Add Room</button>
                            {this.state.rooms.map((room, idx) => {
                                return (<input key={idx} type="text" value={`room${idx}`}>{`Room ${idx}`}</input>)
                            })}<input type="submit" value="Save Rooms" />
                        </form>
                    </div>
                }
            </div>
        )
    }
}