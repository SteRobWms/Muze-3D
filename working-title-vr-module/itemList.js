import React from 'react';
import {
    NativeModules,
    Text,
    View,
    VrButton
} from 'react-360';
import styles from './stylesheet'
import { connect, setCurrentItem, showItem } from './store'

const surfaceModule = NativeModules.surfaceModule;

class ItemList extends React.Component {
    render() {
        return (
            <View style={styles.itemList}>
                {this.props.currentRoom
                    ? this.props.currentRoom.items.map((item, idx) => {
                        return (
                            <VrButton key={idx} style={styles.button} onClick={() => {
                                // surfaceModule.createPanel();
                                showItem();
                                setCurrentItem(idx);
                            }}>
                                <Text style={styles.textSize}>{item.name}</Text>
                            </VrButton>)
                    })
                    : <View>
                        <Text style={styles.textSize}>No Items Loaded!</Text>
                    </View>
                }
            </View>
        );
    }
};

const ConnectedItemList = connect(ItemList);
export default ConnectedItemList;