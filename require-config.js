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

        //immutable: vendorPath + '/immutable/dist/immutable',
        //nuclear: vendorPath + '/nuclear-js/dist/nuclear',
        //ramda: vendorPath + '/ramda/ramda'
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
    //require.paths.immutable = vendorPath + '/immutable/dist/immutable.min';
    //require.paths.nuclear = vendorPath + '/nuclear-js/dist/nuclear.min';
    //require.paths.ramda = vendorPath + '/ramda/ramda.min';
}
