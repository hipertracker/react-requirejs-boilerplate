define(function (require, exports, module) {
    var React = require('react');


    var App = require('es6!app/components/App'); // this does not work!
    console.log('DEBUG App::',App);
    // => DEBUG App:: Object {}

    //var App = require('jsx!app/components/App'); this is OK
    //console.log(React.createElement(App));
    // => ReactElement {type: function, key: null, ref: null, _owner: null, _context: Object…}

    React.render(React.createElement(App),  document.getElementById('app'));
});
