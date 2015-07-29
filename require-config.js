var vendorPath = 'node_modules';

var require = {
    waitSeconds: 200,
    baseUrl: '.',
    paths: {
        app: './app',

        babel: vendorPath + '/requirejs-babel/browser',
        polyfill: vendorPath + '/requirejs-babel/polyfill',
        es6: vendorPath + '/requirejs-babel/es6',

        react: vendorPath + '/react/dist/react-with-addons',
        classnames: vendorPath + 'classnames/index'

    },
    shim: {
        babel: {
            deps: ['polyfill']
        }
    }
};

if (window.ENV === 'prod') {
    require.paths.babel = vendorPath + '/requirejs-babel/browser.min';
    require.paths.polyfill = vendorPath + '/requirejs-babel/polyfill.min';
    require.paths.react = vendorPath + '/react/dist/react-with-addons.min';
}
