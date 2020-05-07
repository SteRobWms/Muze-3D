import React from 'react'
import ItemForm from '../Components/ItemForm'
import ItemTile from '../Components/ItemTile'

export default class ItemTileFormContainer extends React.Component {

    state = {
        expanded: false,
        method: "view"
    }

    toggleExpanded = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    changePanelToView = () => {
        this.setState({
            method: "view"
        })
    }

    uploadImage = (roomId, exhibitId, formData) => {
        const config = {
            method: "PUT",
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
        this.uploadImage(roomId, exhibitId, formData)
            .then(exhibit => {
                console.log(exhibit);
                this.props.updateState(exhibit);
                this.changePanelToView()
            })
            .catch(console.error)
    }

    // name: null
    // description: null
    // creator: null
    // year_of_origin: null
    // item_code: null
    // country_of_origin: null
    // state_of_origin: null
    // city_of_origin: null
    // width: null
    // height: null
    // depth: null
    // x_pos: null
    // y_pos: null
    // z_pos: null
    // model: null

    deleteItem = () => {
        fetch(`http://localhost:3000/exhibits/${this.props.exhibit_id}/rooms/${this.props.roomId}/items/${this.props.id}`,
            {
                method: "DELETE",
                headers: { "Authorization": localStorage.getItem("token") }
            })
            .then(response => response.json())
            .then(exhibit => this.props.updateState(exhibit))
    }

    render() {
        return (
            <div>
                <h3>Item name: {this.props.name ? this.props.name + " " : "n/a"}
                    <button onClick={() => this.deleteItem()}>Delete Item</button>
                    <button onClick={() => this.toggleExpanded()}>{this.state.expanded ? "Collapse" : "Expand"}</button>
                </h3>
                {this.state.expanded
                    ?
                    <div>
                        <button onClick={() => this.setState({ method: "view" })}>View Info</button>
                        <button onClick={() => this.setState({ method: "edit" })}>Edit Item</button>
                        <button onClick={() => this.setState({ method: "upload" })}>Upload Image</button>
                        {this.state.method === "view"
                            ? <ItemTile {...this.props} />
                            : this.state.method === "edit"
                                ? <ItemForm updateState={this.props.updateState} {...this.props} changePanelToView={this.changePanelToView} />

                                : <form onSubmit={(event) => this.handleSubmit(this.props.room_id, this.props.exhibit_id, event)}><label htmlFor="image">Upload Image
                                        <input type="file" name="image" accept="image/*" />
                                </label><br />
                                    <input type="submit" value="submit" />
                                </form>
                        }
                    </div>
                    : false
                }
            </div>
        )
    }

}