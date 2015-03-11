var require = {
    waitSeconds: 200,
    baseUrl: '..',
    paths: {
        app: './app',

        babel: 'vendor/requirejs_babel/babel-4.7.8.min',
        babel_polyfill: 'vendor/requirejs_babel/browser-polyfill',
        es6: 'vendor/requirejs_babel/es6',

        react: 'vendor/react/react-with-addons',
        reflux: 'vendor/reflux/dist/reflux'
    },
    shim: {
        babel: {
            deps: ['babel_polyfill']
        }
        //'react-router-shim': {
        //    exports: 'React'
        //},
        //'react-router': {
        //    deps: ['react-router-shim'],
        //    exports: 'ReactRouter'
        //}
    }
};
