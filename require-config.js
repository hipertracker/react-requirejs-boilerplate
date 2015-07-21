var vendorPath = 'node_modules';

var require = {
    waitSeconds: 200,
    baseUrl: '.',
    paths: {
        app: './app',

        babel: vendorPath + '/requirejs-babel/browser',
        polyfill: vendorPath + '/requirejs-babel/polyfill',
        es6: vendorPath + '/requirejs-babel/es6',
        text: vendorPath + '/text/lib/index',

        react: vendorPath + '/react/dist/react-with-addons'
        classnames: vendorPath + 'classnames/index',
        immutable: vendorPath + '/immutable/dist/immutable',
    },
    shim: {
        babel: {
            deps: ['polyfill']
        }
    }
};

if (window.env === 'prod') {
    require.paths.babel = vendorPath + '/requirejs-babel/browser.min';
    require.paths.polyfill = vendorPath + '/requirejs-babel/polyfill.min';
    require.paths.react = vendorPath + '/react/dist/react-with-addons.min';
    require.paths.immutable = vendorPath + '/immutable/dist/immutable.min';
}
