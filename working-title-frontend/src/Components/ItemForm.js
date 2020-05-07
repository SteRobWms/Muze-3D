import React from 'react';

export default class ItemForm extends React.Component {

    state = {}

    componentDidMount() {
        this.setState({
            ...this.props
        })
    }

    // put "/exhibits/:exhibit/rooms/:room/items/:item", to: "items#update"
    updateItem = (roomId, exhibitId, formData) => {
        const config = {
            method: "PATCH",
            headers: {
                "Authorization": localStorage.getItem("token"),
                "Accept": "application/json"
            },
            body: formData
        }
        return fetch(`http://localhost:3000/exhibits/${exhibitId}/rooms/${roomId}/items/${this.props.id}`, config)
            .then(res => res.json());
    }

    handleSubmit = (roomId, exhibitId, event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        this.updateItem(roomId, exhibitId, formData)
            .then(exhibit => {
                console.log(exhibit);
                this.props.updateState(exhibit);
                this.props.changePanelToView()
            })
            .catch(console.error);
    }

    handleChange = (e) => {
        // console.log(e.target)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(this.props.room_id, this.props.exhibit_id, event)}>
                <label htmlFor="name">Name
                <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
                </label><br />

                <label htmlFor="description">Material
                <input type="text" name="description" value={this.state.description} onChange={(e) => this.handleChange(e)} />
                </label><br />

                <label htmlFor="creator">Artist or Creator
                <input type="text" name="creator" value={this.state.creator} onChange={(e) => this.handleChange(e)} />
                </label><br />

                <label htmlFor="item_code">Item Code
                <input type="text" name="item_code" value={this.state.item_code} onChange={(e) => this.handleChange(e)} />
                </label><br />

                <label htmlFor="year_of_origin">Year Created
                <input type="text" name="year_of_origin" value={this.state.year_of_origin} onChange={(e) => this.handleChange(e)} />
                </label><br />

                <label htmlFor="country_of_origin">Country of Origin
                <input type="text" name="country_of_origin" value={this.state.country_of_origin} onChange={(e) => this.handleChange(e)} />
                </label><br />

                <label htmlFor="state_of_origin">State of Origin
                <input type="text" name="state_of_origin" value={this.state.state_of_origin} onChange={(e) => this.handleChange(e)} />
                </label><br />

                <label htmlFor="city_of_origin">City of Origin
                <input type="text" name="city_of_origin" value={this.state.city_of_origin} onChange={(e) => this.handleChange(e)} />
                </label><br />

                <label htmlFor="width">Width (in meters)
                <input type="number" name="width" value={this.state.width} onChange={(e) => this.handleChange(e)} />
                </label><br />

                <label htmlFor="depth">Depth (in meters)
                <input type="number" name="depth" value={this.state.depth} onChange={(e) => this.handleChange(e)} />
                </label><br />

                <label htmlFor="height">Height (in meters)
                <input type="number" name="height" value={this.state.height} onChange={(e) => this.handleChange(e)} />
                </label><br />

                <label htmlFor="x_pos">Position Left/Right (in meters)(0 is straight ahead, -1 is one meter to the left, 1 is one meter to the right)
                <input type="number" name="x_pos" value={this.state.x_pos} onChange={(e) => this.handleChange(e)} />
                </label><br />

                <label htmlFor="y_pos">Position Up/Down (in meters)(0 is straight ahead, -1 is one meter down, 1 is one meter up)
                <input type="number" name="y_pos" value={this.state.y_pos} onChange={(e) => this.handleChange(e)} />
                </label><br />

                <label htmlFor="z_pos">Position Near/Far (in meters)(0 is on you, -1 is one meter behind, 1 is one meter in front)
                <input type="number" name="z_pos" value={this.state.z_pos} onChange={(e) => this.handleChange(e)} />
                </label><br />

                <input type="submit" value="Submit" />
            </form>
        )
    };
}