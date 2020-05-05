import React from 'react'
import ItemTile from './ItemTile'
import ItemForm from './ItemForm'
import ITFC from '../Containers/ItemTileFormContainer'

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
            <div className="tile" style={{ border: "solid black 1px", width: "90%" }}>
                <h3>Room {this.props.id}</h3>
                <h3>Image Uploaded</h3>
                <a href={this.props.background_image}><img style={{ maxWidth: "100px" }} src={this.props.background_image} alt="None" /></a><br />
                <button onClick={() => this.toggleEditRoomImage()}>Add/Update Room Image</button>
                <button onClick={() => this.props.deleteRoom(this.roomId)}>Delete Room (must delete a room's items first!)</button>
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
                <div>
                    {/* {this.props.exhibit ? <h3>Exhibit: {this.props.exhibit.name}</h3> : false} */}
                    <button onClick={() => this.props.addItem(this.roomId)}>Add Item</button>
                    {this.props.items && this.props.items.length > 0
                        ? this.props.items.map((item, idx) => {
                            return (
                                <ITFC key={idx} {...item} roomId={this.roomId} />
                                // {this.state.showItemForm === false
                                //     ? <ItemTile key={idx} {...item} roomId={this.roomId} />
                                //     : <ItemForm key={idx} {...item} roomId={this.roomId} />
                                // }
                            )
                        })
                        : false
                    }
                </div>
            </div>
        )
    }
}