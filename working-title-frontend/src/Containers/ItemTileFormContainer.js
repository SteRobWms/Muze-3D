import React from 'react'
import ItemForm from '../Components/ItemForm'
// import ItemTile from '../Components/ItemTile'
import { Modal } from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/startbootstrap-heroic-features/css/heroic-features.css'

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
            <div className="card-text" style={{ fontWeight: "bold" }}>
                {this.props.name ? this.props.name : "n/a"}
                <br />
                {this.props.creator === parseInt(localStorage.user)
                    ? <button className="btn-sm" style={{ color: "red", fontWeight: "bold", margin: "1px" }} onClick={() => this.deleteItem()}>Delete</button>
                    : false
                }
                <button className="btn-sm" style={{ color: "green", fontWeight: "bold", margin: "1px" }} onClick={() => this.toggleExpanded()}>View</button>
                <br />
                <br />

                {this.state.expanded
                    ?
                    <Modal className="card-h-100" show={true}>
                        <Modal.Header>
                            <div className="container">
                                <div className="card-header" style={{ textAlign: "center", fontSize: "1.5em", fontWeight: "bold" }}>{this.props.name ? this.props.name : "Item Name Unknown"}</div>
                                <br />
                                <img className="card-img-top" src={this.props.image} alt={this.props.name ? `Add an image for ${this.props.name}` : `Add an image for untitled item`} />
                            </div>
                        </Modal.Header>
                        <Modal.Body>
                            {this.props.creator === parseInt(localStorage.user)
                                ? <ul className="nav nav-fill nav-tabs">
                                    <button className="nav-item" onClick={() => this.setState({ method: "view" })}>View Info</button>
                                    <button className="nav-item" onClick={() => this.setState({ method: "edit" })}>Edit Item</button>
                                    <button className="nav-item" onClick={() => this.setState({ method: "upload" })}>Upload Image</button>
                                </ul>
                                : false
                            }
                            {this.state.method === "view"
                                ?
                                <div className="card-body">
                                    <p className="card-text">Creator/Source: {this.props.creator}</p>
                                    <p className="card-text">Description: {this.props.description}</p>
                                    <p className="card-text">Year: {this.props.year_of_origin}</p>
                                    <p className="card-text">Item Code: {this.props.item_code}</p>

                                </div>
                                // <ItemTile {...this.props} />
                                : this.state.method === "edit"
                                    ? <ItemForm updateState={this.props.updateState} {...this.props} changePanelToView={this.changePanelToView} />

                                    : <form className="card-body" onSubmit={(event) => this.handleSubmit(this.props.room_id, this.props.exhibit_id, event)}><label htmlFor="image" style={{ fontWeight: "bold" }}>Upload Image
                                        <input type="file" name="image" accept="image/*" required />
                                    </label><br />
                                        <input type="submit" value="submit" />
                                    </form>
                            }
                        </Modal.Body>
                        <Modal.Footer style={{ alignContent: "center", justifyContent: "center" }}>
                            <button className="btn btn-primary b tn-lg" onClick={() => this.toggleExpanded()}>Close Item</button>
                        </Modal.Footer>
                    </Modal>
                    : false
                }
            </div>
        )
    }

}