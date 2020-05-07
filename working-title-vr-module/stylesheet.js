import React from 'react';
import { StyleSheet } from 'react-360';

const styles = StyleSheet.create({
    statusPanel: {
        width: 1000,
        height: 60,
        backgroundColor: '#0EB1D288',
        borderColor: '#00345988',
        borderWidth: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'stretch',
        padding: 10
    },
    itemList: {
        width: 1000,
        height: 90,
        backgroundColor: '#0EB1D288',
        borderColor: '#00345988',
        borderWidth: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'stretch',
        padding: 10
    },
    itemPanel: {
        width: 750,
        height: 650,
        backgroundColor: '#0EB1D288',
        borderColor: '#00345988',
        borderWidth: 5,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        padding: 10
    },
    header: {
        backgroundColor: '#003459'
    },
    headerText: {
        fontSize: 24,
        // textAlign: 'center',
        fontWeight: 'bold'
    },
    textSize: {
        fontSize: 20,
        textAlign: 'center',
    },

    infoHeader: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    button: {
        height: 60,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#0EB1D2AA',
        borderColor: '#00345988',
        borderWidth: 3,
        padding: 10
    },
    imageContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        height: 400,
        width: 400,
        padding: 5
    },
    image: {
        flexDirection: "column",
        justifyContent: 'center',
        height: 400,
        width: 400,
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
