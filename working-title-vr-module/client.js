// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface, Module, Location } from 'react-360-web';

function init(bundle, parent, options = {}) {
    r360 = new ReactInstance(bundle, parent, {
        // Add custom options here
        fullScreen: true,
        nativeModules: [
            new surfaceModule(),
        ],
        ...options
    });

    // Link to get back to the 2D frontend
    const connectedButtonToSafetyPanel = new Surface(250, 75, Surface.SurfaceShape.Flat)
    connectedButtonToSafetyPanel.setAngle(0, -0.6);
    r360.renderToSurface(
        r360.createRoot('ConnectedButtonToSafety', { currentURL: window.location, exhibitID: parseInt(window.location.search.split('=')[1]) }),
        connectedButtonToSafetyPanel
    );

    // surface = r360.getDefaultSurface();

    const connectedItemPanel = new Surface(800, 650, Surface.SurfaceShape.Flat)
    connectedItemPanel.setAngle(0, 0.03)
    // connectedItemPanel = r360.renderToSurface(
    r360.renderToSurface(
        r360.createRoot('ConnectedItemPanel', { /* initial props */ }),
        connectedItemPanel
        // r360.getDefaultSurface()
    );

    // List of buttons at bottom of screen to show respective items
    const connectedItemList = new Surface(1000, 100, Surface.SurfaceShape.Flat)
    connectedItemList.setAngle(0, -0.47);
    r360.renderToSurface(
        r360.createRoot('ConnectedItemList', { /* initial props */ }),
        connectedItemList
    );

    // At top of screen, show current location info
    const connectedStatusPanel = new Surface(1000, 100, Surface.SurfaceShape.Flat);
    connectedStatusPanel.setAngle(0, 0.47);
    // const connectedStatusPanel = new Location([0, 0, -4]);
    r360.renderToSurface(
        // This right here. Figuring out to put currentURL and exhibitID here took 5 hours. This lets StatusPanel see the URL passed from the frontend link.
        r360.createRoot('ConnectedStatusPanel', { currentURL: window.location, exhibitID: parseInt(window.location.search.split('=')[1]) }),
        connectedStatusPanel
    );
    // Link to next room
    const connectedNextRoomButton = new Surface(200, 75, Surface.SurfaceShape.Flat);
    connectedNextRoomButton.setAngle(0.65, 0);
    r360.renderToSurface(
        r360.createRoot('ConnectedNextRoomButton', { currentURL: window.location, exhibitID: parseInt(window.location.search.split('=')[1]) }),
        connectedNextRoomButton
    );
    // Link to previous room
    const connectedPrevRoomButton = new Surface(175, 75, Surface.SurfaceShape.Flat);
    connectedPrevRoomButton.setAngle(-0.6, 0);
    r360.renderToSurface(
        r360.createRoot('ConnectedPrevRoomButton', { currentURL: window.location, exhibitID: parseInt(window.location.search.split('=')[1]) }),
        connectedPrevRoomButton
    );
    // Load the initial environment
    r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

class surfaceModule extends Module {
    constructor() {
        super('surfaceModule');
    }

    destroyPanel() {
        r360.detachRoot(connectedItemPanel);
    }

    createPanel() {
        r360.renderToLocation(
            r360.createRoot('ConnectedItemPanel', {}),
            itemPanelLocation
        );
    }
}

window.React360 = { init };
