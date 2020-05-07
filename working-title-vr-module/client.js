// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface, Module } from 'react-360-web';

function init(bundle, parent, options = {}) {
    r360 = new ReactInstance(bundle, parent, {
        // Add custom options here
        fullScreen: true,
        ...options
    });

    // Render your app content to the default cylinder surface
    r360.renderToSurface(
        r360.createRoot('ConnectedButtonToSafety', { /* initial props */ }),
        r360.getDefaultSurface()
    );

    // At top of screen, show current location info
    const connectedStatusPanel = new Surface(400, 200, Surface.SurfaceShape.Flat);
    connectedStatusPanel.setAngle(-0.475, 0.34, 0.11);

    r360.renderToSurface(
        // This right here. Figuring out to put currentURL and exhibitID here took 5 hours. This lets StatusPanel see the URL passed from the frontend link.
        r360.createRoot('ConnectedStatusPanel', { currentURL: window.location, exhibitID: parseInt(window.location.search.split('=')[1]), test: "testing" }),
        connectedStatusPanel
    );

    // Load the initial environment
    r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = { init };
