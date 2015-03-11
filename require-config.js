var require = {
    waitSeconds: 200,
    baseUrl: '..',
    paths: {
        app: './app',

        JSXTransformer: 'bower_components/react/JSXTransformer',
        jsx: 'bower_components/jsx_requirejs_plugin/js/jsx',

        babel: 'bower_components/requirejs_babel/babel-4.6.6.min',
        es6: 'bower_components/requirejs_babel/es6',

        react: 'bower_components/react/react-with-addons',
        reflux: 'bower_components/reflux/dist/reflux',
        text: 'bower_components/requirejs_text/text'
        //jquery: 'bower_components/jquery/dist/jquery',
        //lodash: 'bower_components/lodash/lodash',
        //semantic: 'node_modules/react-semantify/amd',
        //react: 'bower_components/react/react-with-addons',
        //'react-router': 'bower_components/react_router/build/global/ReactRouter',
        //'react-router-shim': 'react-router-shim',
        //JSXTransformer: 'bower_components/jsx_requirejs_plugin/js/JSXTransformer',
        //jsx: 'bower_components/jsx_requirejs_plugin/js/jsx',
        //reflux: 'bower_components/reflux/dist/reflux',
        //flux: 'flux',
        //lib: 'lib'
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
    },
    jsx: {
        fileExtension: '.js',
        harmony: true,
        stripTypes: true
    },
    es6: {
        fileExtension: '.js',
        harmony: true,
        stripTypes: true
    }
};
