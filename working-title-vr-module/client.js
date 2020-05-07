// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface, Module, Location } from 'react-360-web';

class surfaceModule extends Module {
    constructor() {
        super('surfaceModule');
    }

    destroyPanel() {
        r360.detachRoot(connectedItemPanel);
    }

    createPanel() {
        r360.renderToSurface(
            r360.createRoot('ConnectedItemPanel', {}),
            surface
        );
    }
}

function init(bundle, parent, options = {}) {
    r360 = new ReactInstance(bundle, parent, {
        // Add custom options here
        fullScreen: true,
        nativeModules: [
            new surfaceModule(),
        ],
        ...options
    });

    surface = r360.getDefaultSurface();

    const connectedItemList = new Surface(1000, 100, Surface.SurfaceShape.Flat)
    connectedItemList.setAngle(0, -0.47);
    r360.renderToSurface(
        r360.createRoot('ConnectedItemList', { /* initial props */ }),
        connectedItemList
    );

    const connectedButtonToSafetyPanel = new Surface(300, 75, Surface.SurfaceShape.Flat)
    connectedButtonToSafetyPanel.setAngle(0, 0);
    // Render your app content to the default cylinder surface
    r360.renderToSurface(
        r360.createRoot('ConnectedButtonToSafety', { currentURL: window.location, exhibitID: parseInt(window.location.search.split('=')[1]) }),
        connectedButtonToSafetyPanel
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



    // Load the initial environment
    r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = { init };
