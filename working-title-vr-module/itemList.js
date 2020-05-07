import React from 'react';
import {
    AppRegistry,
    Environment,
    Image,
    NativeModules,
    StyleSheet,
    Text,
    View,
    VrButton
} from 'react-360';
import { styles } from './stylesheet'
import { connect } from './store'

class ItemList extends React.Component {
    render() {
        return (
            <View style={stylesh.clipboardPanel}>
                <View style={stylesh.greetingBox}>
                    <Text style={stylesh.greeting}>Here is where I may display VR context info</Text>
                </View>
            </View>
        );
    }
};

const ConnectedItemList = connect(ItemList);
export default ConnectedItemList;