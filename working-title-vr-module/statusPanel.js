import React from 'react';
import {
    AppRegistry,
    Environment,
    Image,
    NativeModules,
    Text,
    View
} from 'react-360';
import styles from './stylesheet'
import { connect } from './store'

class StatusPanel extends React.Component {

    render() {
        return (
            this.props.exhibit.museum
                ?
                <View style={styles.statusPanel} >
                    <Text>
                        Museum: {this.props.exhibit.museum.name}
                    </Text>
                    <Text>
                        Added by: {this.props.exhibit.creator.username}
                    </Text>
                    <Text>
                        Exhibit: {this.props.exhibit.name}
                    </Text>
                    <Text>
                        Room {parseInt(this.props.currentRoomIndex) + 1}
                    </Text>
                </View>
                : <View><Text>Loading...</Text></View>
        )
    }
}

const ConnectedStatusPanel = connect(StatusPanel);
export default ConnectedStatusPanel;