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
import ConnectedStatusPanel from './statusPanel';
import ConnectedItemPanel from './itemPanel';
import ConnectedItemList from './itemList';
import styles from './stylesheet';
import { connect, initialState } from './store';


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

const ConnectedButtonToSafety = connect(ButtonToSafety);

AppRegistry.registerComponent('ConnectedButtonToSafety', () => ConnectedButtonToSafety);
AppRegistry.registerComponent('ConnectedStatusPanel', () => ConnectedStatusPanel);
AppRegistry.registerComponent('ConnectedItemPanel', () => ConnectedItemPanel);
AppRegistry.registerComponent('ConnectedItemList', () => ConnectedItemList);
