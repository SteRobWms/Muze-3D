import React from 'react';
import {
    NativeModules,
    Text,
    View,
    VrButton
} from 'react-360';
import styles from './stylesheet'
import { connect } from './store'

const surfaceModule = NativeModules.surfaceModule;

class ItemList extends React.Component {
    render() {
        return (
            <View style={styles.itemList}>
                {this.props.currentRoom ? this.props.currentRoom.items.map((item, idx) => {
                    <VrButton style={styles.button} onClick={() => surfaceModule.createPanel()}>
                        <Text style={styles.textSize}>{item.name}</Text>
                    </VrButton>
                })
                    : <Text style={styles.textSize}>No Items Loaded!</Text>
                }
            </View>
        );
    }
};

const ConnectedItemList = connect(ItemList);
export default ConnectedItemList;