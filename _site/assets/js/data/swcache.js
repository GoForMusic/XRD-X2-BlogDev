const resource = [
    /* --- CSS --- */
    '/XRD-X2-BlogDev/assets/css/style.css',

    /* --- PWA --- */
    '/XRD-X2-BlogDev/app.js',
    '/XRD-X2-BlogDev/sw.js',

    /* --- HTML --- */
    '/XRD-X2-BlogDev/index.html',
    '/XRD-X2-BlogDev/404.html',

    
        '/XRD-X2-BlogDev/categories/',
    
        '/XRD-X2-BlogDev/tags/',
    
        '/XRD-X2-BlogDev/archives/',
    
        '/XRD-X2-BlogDev/about/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/XRD-X2-BlogDev/assets/img/favicons/android-chrome-192x192.png',
        '/XRD-X2-BlogDev/assets/img/favicons/android-chrome-512x512.png',
        '/XRD-X2-BlogDev/assets/img/favicons/apple-touch-icon.png',
        '/XRD-X2-BlogDev/assets/img/favicons/favicon-16x16.png',
        '/XRD-X2-BlogDev/assets/img/favicons/favicon-32x32.png',
        '/XRD-X2-BlogDev/assets/img/favicons/favicon.ico',
        '/XRD-X2-BlogDev/assets/img/favicons/mstile-150x150.png',
        '/XRD-X2-BlogDev/assets/js/dist/categories.min.js',
        '/XRD-X2-BlogDev/assets/js/dist/commons.min.js',
        '/XRD-X2-BlogDev/assets/js/dist/home.min.js',
        '/XRD-X2-BlogDev/assets/js/dist/misc.min.js',
        '/XRD-X2-BlogDev/assets/js/dist/page.min.js',
        '/XRD-X2-BlogDev/assets/js/dist/post.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    'localhost:4000',

    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [];

