// import React from 'react';
import { StyleSheet } from 'react-360';

const styles = StyleSheet.create({
    leftPanel: {
        width: 300,
        height: 600,
        backgroundColor: '#00171F',
        borderColor: '#003459',
        borderWidth: 10,
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'stretch',
        padding: 10
    },
    rightPanel: {
        width: 300,
        height: 600,
        backgroundColor: '#00171F',
        borderColor: '#003459',
        borderWidth: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        // alignItems: 'stretch',
        padding: 10
    },
    header: {
        backgroundColor: '#003459'
    },
    headerText: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    textSize: {
        fontSize: 20,
        textAlign: 'center'
    },
    infoHeader: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    button: {
        height: 60,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#0EB1D2',
        borderColor: 'rgb(255,255,255)',
        borderWidth: 2.5
    },
    hover: {
        height: 60,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#0073B7',
        borderColor: 'rgb(255,255,255)',
        borderWidth: 2.5
    }
});

export default styles;

// const stylesh = StyleSheet.create({
//     panel: {
//         // Fill the entire surface
//         width: 1000,
//         height: 600,
//         backgroundColor: 'rgba(255, 255, 255, 0.4)',
//         justifyContent: 'center',
//         alignItems: 'bottom',
//     },
//     statusPanel: {
//         width: 400,
//         height: 200,
//         backgroundColor: 'rgba(255, 255, 255, 0.4)',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     greetingBox: {
//         padding: 20,
//         backgroundColor: '#000000',
//         borderColor: '#639dda',
//         borderWidth: 2,
//     },
//     greeting: {
//         fontSize: 30,
//     },
// });
