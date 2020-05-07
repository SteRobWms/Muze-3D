import React from 'react';
import {
    Image,
    NativeModules,
    Text,
    View,
    VrButton
} from 'react-360';
import styles from './stylesheet'
import { connect, hideItem } from './store'

const surfaceModule = NativeModules.surfaceModule;

class ItemPanel extends React.Component {

    render() {
        return (
            this.props.viewItem === true
                ? <View style={styles.itemPanel}>
                    <VrButton style={styles.button} onClick={() => hideItem()}>
                        <Text style={styles.textSize}>Hide Item</Text>
                    </VrButton>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: `${this.props.currentItem.image}` }} style={styles.image} />
                    </View>
                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>Name: {this.props.currentItem.name ? this.props.currentItem.name : "unknown"}</Text>
                        <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>Description: {this.props.currentItem.description ? this.props.currentItem.description : "unknown"}</Text>
                        <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>Artist/Creator: {this.props.currentItem.creator ? this.props.currentItem.creator : "unknown"}</Text>
                        <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>Item Code: {this.props.currentItem.item_code ? this.props.currentItem.item_code : "unknown"}</Text>
                        <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>Year of Origin: {this.props.currentItem.year_of_origin ? this.props.currentItem.year_of_origin : "unknown"}</Text>
                    </View>
                </View>
                : <View></View>
        );
    }
}

const ConnectedItemPanel = connect(ItemPanel);
export default ConnectedItemPanel;