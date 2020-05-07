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
import { styles } from './stylesheet'
import { connect } from './store'

class ItemPanel extends React.Component {
    render() {
        return (
            <View style={styles.clipboardPanel}>
                <View style={styles.greetingBox}>
                    <Text style={styles.greeting}>Here is where I may display VR context info</Text>
                </View>
            </View>
        );
    }
}

const ConnectedItemPanel = connect(ItemPanel);
export default ConnectedItemPanel;