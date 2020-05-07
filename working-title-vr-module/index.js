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
import ConnectedStatusPanel from './statusPanel'
import ConnectedItemPanel from './itemPanel'
import ConnectedItemList from './itemList'
import { styles } from './stylesheet'
import { connect } from './store'


// Hold misc floating buttons here in index


class ButtonToSafety extends React.Component {

    componentDidMount() {
        fetch(`http://localhost:3000/exhibits/${this.props.exhibitID}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ exhibit: data });
                Environment.setBackgroundImage({ uri: this.state.exhibit.rooms[0].background_image })
            })
    }

    render() {
        return (
            <View style={stylesh.panel}>
                <View style={stylesh.greetingBox}>
                    <VrButton onClick={() => NativeModules.LinkingManager.openURL(`http://localhost:3001/exhibits/${this.props.exhibitID}`)} >
                        <Text style={stylesh.greeting}>Go Back to 2D Site</Text>
                    </VrButton>
                </View>
            </View>
        );
    }
}

const ConnectedButtonToSafety = connect(ButtonToSafety);

AppRegistry.registerComponent('ConnectedButtonToSafety', () => ConnectedButtonToSafety);
AppRegistry.registerComponent('ConnectedStatusPanel', () => ConnectedStatusPanel);
AppRegistry.registerComponent('ConnectedItemPanel', () => ConnectedItemPanel);
AppRegistry.registerComponent('ConnectedItemList', () => ConnectedItemList);
