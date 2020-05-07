import React from 'react'

const State = {
    exhibit: false,
    roomList: false,
    currentRoomIndex: 0,
    currentRoom: false,
    // nextRoom: false,
    // previousRoom: false,
    currentItem: false
}

const listeners = new Set();

function updateComponents() {
    for (const cb of listeners.values()) {
        cb();
    }
}

// Will be called on the first componentDidMount using results of fetch using exhibit id, derived from a component's initial props
export function setExhibit(exhibit) {
    State.exhibit = exhibit;
    updateComponents();
}

// Update current item state, which will be used to populate an info box. Info box will be mounted/unmounted using an info circle and an "X", respectively.
export function setCurrentItem(itemIndex) {
    State.currentItem = State.roomList[State.currentRoomIndex].items[itemIndex];
    updateComponents();
}
// Shouldn't need to reset, but you never know
export function resetCurrentItem() {
    State.currentItem = false;
    updateComponents();
}
// Room navigation, starting with setting the first room
export function setFirstRoom() {
    State.currentRoom = State.roomList[0];
    updateComponents();
}

export function nextRoom() {
    if ((State.currentRoomIndex + 1) < State.roomList.length) {
        State.currentRoom = State.roomList[State.currentRoomIndex + 1];
        State.currentRoomIndex = State.currentRoomIndex + 1
    }
    else { alert("You have reached the last room. Thanks for using Muze3D!") }
    updateComponents();
}

export function previousRoom() {
    if (State.currentRoomIndex > 0) {
        State.currentRoom = State.roomList[State.currentRoomIndex - 1];
        State.currentRoomIndex = State.currentRoomIndex - 1
    }
    else { alert("You're still in the first room. There's nowhere to go but forward") }
    updateComponents();
}

export function connect(Component) {
    return class Wrapper extends React.Component {
        state = {
            exhibit: State.exhibit,
            roomList: State.roomList,
            currentRoomIndex: State.currentRoomIndex,
            currentRoom: State.currentRoom,
            // nextRoom: State.nextRoom,
            // previousRoom: State.previousRoom,
            currentItem: State.currentItem
        }

        _listener = () => {
            this.setState({
                exhibit: State.exhibit,
                roomList: State.roomList,
                currentRoomIndex: State.currentRoomIndex,
                currentRoom: State.currentRoom,
                // nextRoom: State.nextRoom,
                // previousRoom: State.previousRoom,
                currentItem: State.currentItem
            })
        }

        componentDidMount() {
            listeners.add(this._listener);
        }

        render() {
            return (
                <Component
                    {...this.props}
                    exhibit={this.state.exhibit}
                    roomList={this.state.rooms}
                    currentRoomIndex={this.state.currentRoomIndex}
                    currentRoom={this.state.currentRoom}
                    currentItem={this.state.currentItem} />
            )
        }
    }
}
