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

        //immutable: vendor_path + '/dist/immutable',
        //nuclear: vendor_path + '/nuclear-js/dist/nuclear',
        //ramda: vendor_path + '/ramda/ramda'
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
    //require.paths.immutable = vendor_path + '/dist/immutable.min';
    //require.paths.nuclear = vendor_path + '/nuclear-js/dist/nuclear.min';
    //require.paths.ramda = vendor_path + '/ramda/ramda.min';
}
