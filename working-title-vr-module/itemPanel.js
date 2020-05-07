import React from 'react';
import {
    Image,
    NativeModules,
    Text,
    View,
    VrButton
} from 'react-360';
import styles from './stylesheet'
import { connect } from './store'

const surfaceModule = NativeModules.surfaceModule;

class ItemPanel extends React.Component {
    render() {
        return (
            <View style={styles.clipboardPanel}>
                <View style={styles.greetingBox}>
                    <VrButton style={styles.greeting}>X</VrButton>
                </View>
                <View style={styles.greetingBox}>
                    <Image source={{ uri: this.props.currentItem.image }} style={{ maxWidth: 500, maxHeight: 300 }} />
                </View>
                <View style={styles.greetingBox}>
                    <Text style={styles.greeting}>X</Text>
                </View>
            </View>
        );
    }
}

const ConnectedItemPanel = connect(ItemPanel);
export default ConnectedItemPanel;