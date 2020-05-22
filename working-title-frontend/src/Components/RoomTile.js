import React from 'react'
import ITFC from '../Containers/ItemTileFormContainer'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/startbootstrap-heroic-features/css/heroic-features.css'

export default class RoomTile extends React.Component {

    state = {
        editRoomImage: false,
        showItemform: {

        }
    }

    toggleEditRoomImage = () => {
        this.setState({
            editRoomImage: !this.state.editRoomImage
        })
    }

    roomId = this.props.id

    render() {
        return (
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100" >
                    <img className="card-img-top" src={this.props.background_image} alt="Upload an Image" />
                    <br />
                    {this.props.creator === parseInt(localStorage.user)
                        ?
                        <ul className="nav nav-fill">
                            <button type="button" className="nav-item btn-primary btn-lg" style={{ margin: "1px" }} onClick={() => this.toggleEditRoomImage()}>New Room Img</button>

                            <button type="button" className="nav-item btn-primary btn-lg" style={{ margin: "1px" }} onClick={() => this.props.addItem(this.roomId)}>Add Item</button>

                            {this.props.items && this.props.items.length > 0
                                ? false
                                :
                                <button type="button" className="nav-item btn-primary btn-lg" style={{ margin: "1px" }} onClick={() => this.props.deleteRoom(this.roomId)}>Delete Room</button>
                            }

                        </ul>
                        : false
                    }

                    <div>
                        {this.state.editRoomImage
                            ?
                            <form onSubmit={(event) => this.props.handleUpdateRoom(this.roomId, event)}>
                                <label htmlFor="background_image">Upload Image
                                <input type="file" name="background_image" accept="image/*" />
                                </label><br />
                                <input type="submit" value="Submit" />
                            </form>
                            : false
                        }
                        <div className="card-body">
                            <div className="card-title" style={{ fontWeight: "bold", fontSize: "1.5em" }}>Items</div>
                            {this.props.items && this.props.items.length > 0
                                ? this.props.items.map((item, idx) => {
                                    return (
                                        <ITFC key={idx} {...item} roomId={this.roomId} exhibit_id={this.props.exhibit_id} user={this.props.creator} updateState={this.props.updateState} />
                                    )
                                })
                                : false
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}