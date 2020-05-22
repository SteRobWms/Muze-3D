// import React from 'react';
// import {
//     NativeModules,
//     Text,
//     View,
//     VrButton
// } from 'react-360';
// import styles from './stylesheet'
// import { connect, setCurrentItem } from './store'
// import ConnectedItemPanel from './itemPanel'
// import ConnectedItemList from './itemList'

// class ItemContainer extends React.Component {

//     state = {
//         showPanel: false
//     }

//     toggleShowPanel = () => {
//         this.setState({
//             showPanel: !this.state.showPanel
//         })
//     }

//     render() {
//         return (
//             <View>
//                 <ConnectedItemList showPanel={this.state.showPanel} toggleShowPanel={this.toggleShowPanel}></ConnectedItemList>
//                 <ConnectedItemPanel showPanel={this.state.showPanel} toggleShowPanel={this.toggleShowPanel}></ConnectedItemPanel>
//             </View>
//         )
//     }
// }

// const ConnectedItemContainer = connect(ItemContainer);
// export default ConnectedItemContainer;