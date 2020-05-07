import React from 'react';
import {
    AppRegistry,
    Environment,
    Image,
    NativeModules,
    Text,
    View,
    VrButton
} from 'react-360';
// import ConnectedItemContainer from './itemContainer';
import ConnectedItemList from './itemList';
import ConnectedItemPanel from './itemPanel';
import ConnectedStatusPanel from './statusPanel';
import styles from './stylesheet';
import { connect, initialState, nextRoom, previousRoom } from './store';


// Hold misc floating buttons here in index
class ButtonToSafety extends React.Component {

    componentDidMount() {
        fetch(`http://localhost:3000/exhibits/${this.props.exhibitID}`)
            .then(response => response.json())
            .then(exhibit => {
                console.log(exhibit);
                initialState(exhibit);
                Environment.setBackgroundImage({ uri: exhibit.rooms[0].background_image })
            })
    }

    render() {
        return (
            <View>
                <VrButton style={styles.button} onClick={() => NativeModules.LinkingManager.openURL(`http://localhost:3001/exhibits/${this.props.exhibitID}`)} >
                    <Text style={styles.textSize}>Go Back to 2D Site</Text>
                </VrButton>
            </View>
        );
    }
}

class PrevRoomButton extends React.Component {

    render() {
        return (
            <View>
                <VrButton style={styles.button} onClick={() => previousRoom()}>
                    <Text style={styles.infoHeader}>Previous Room</Text>
                </VrButton>
            </View>
        )
    }
}

class NextRoomButton extends React.Component {

    render() {
        return (
            <View>
                <VrButton style={styles.button} onClick={() => nextRoom()}>
                    <Text style={styles.infoHeader}>Next Room</Text>
                </VrButton>
            </View>
        )
    }
}


const ConnectedPrevRoomButton = connect(PrevRoomButton);
const ConnectedNextRoomButton = connect(NextRoomButton);
const ConnectedButtonToSafety = connect(ButtonToSafety);

AppRegistry.registerComponent('ConnectedNextRoomButton', () => ConnectedNextRoomButton);
AppRegistry.registerComponent('ConnectedPrevRoomButton', () => ConnectedPrevRoomButton);
AppRegistry.registerComponent('ConnectedButtonToSafety', () => ConnectedButtonToSafety);
// AppRegistry.registerComponent('ConnectedItemContainer', () => ConnectedItemContainer);
AppRegistry.registerComponent('ConnectedItemList', () => ConnectedItemList);
AppRegistry.registerComponent('ConnectedItemPanel', () => ConnectedItemPanel);
AppRegistry.registerComponent('ConnectedStatusPanel', () => ConnectedStatusPanel);
