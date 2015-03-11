var require = {
    waitSeconds: 200,
    baseUrl: '..',
    paths: {
        app: './app',

        babel: 'bower_components/requirejs_babel/babel-4.6.6.min',
        es6: 'bower_components/requirejs_babel/es6',

        react: 'bower_components/react/react-with-addons',
        reflux: 'bower_components/reflux/dist/reflux',
    },
    shim: {
        //babel: {
        //    deps: ['babel_polyfill']
        //}
        //'react-router-shim': {
        //    exports: 'React'
        //},
        //'react-router': {
        //    deps: ['react-router-shim'],
        //    exports: 'ReactRouter'
        //}
    }
};
