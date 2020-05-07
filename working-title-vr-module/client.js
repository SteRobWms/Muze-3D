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
        r360.createRoot('ButtonToSafety', { /* initial props */ }),
        r360.getDefaultSurface()
    );

    const rightPanel = new Surface(400, 400, Surface.SurfaceShape.Flat);
    rightPanel.setAngle(0.1, 0.4);

    r360.renderToSurface(
        // This right here. Figuring out to put currentURL and exhibitID here took 5 hours. This lets TestPanel see the URL passed from the frontend link.
        r360.createRoot('TestPanel', { currentURL: window.location, exhibitID: parseInt(window.location.search.split('=')[1]), test: "testing" }),
        rightPanel
    );

    // Load the initial environment
    r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = { init };
