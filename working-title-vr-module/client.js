// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance } from 'react-360-web';

function init(bundle, parent, options = {}) {
    r360 = new ReactInstance(bundle, parent, {
        // Add custom options here
        fullScreen: true,
        ...options,
    });

    // Render your app content to the default cylinder surface
    r360.renderToSurface(
        r360.createRoot('ButtonToSafety', { /* initial props */ }),
        r360.getDefaultSurface()
    );

    // const rightPanel = new Surface(400, 300, Surface.SurfaceShape.Flat);
    // rightPanel.setAngle(0.1, 0.4);

    // r360.renderToSurface(
    //     r360.createRoot('Clipboard', { /* initial props */ }),
    //     rightPanel
    // );

    // Load the initial environment
    r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = { init };
