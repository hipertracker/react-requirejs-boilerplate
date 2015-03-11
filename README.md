# react-babel

Testing [requirejs-babel](https://github.com/mikach/requirejs-babel).

The project uses two plugins for React & JSX

  * [jsx_requirejs_plugin](https://github.com/philix/jsx-requirejs-plugin) - based on JSXTransformer
  * [requirejs-babel](https://github.com/mikach/requirejs-babel) - based on [Babel](http://babeljs.io/)
 
The fist one is working fine. The second one is not working. `require('es6!app/components/App')` 
 is returning an empty object.
 
index.js:

```javascript
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
```


## Install

```
bower install
http-server -p 3000
open http://localhost:3000
```

