import React from 'react';

// generators work with babel-polyfill.js
function* foo() {
    yield 1;
}

// Babel experimental:
let { x, y, ...z } = {x: 1, y: 2, a: 3, b: 4};
console.log('@Babel experimental:');
console.log('@x:', x);
console.log('@y:', y);
console.log('@z:', z);

console.log(foo(1).next());

import HelloWorld from 'es6!./components/HelloWorld';
React.render(React.createElement(HelloWorld), document.getElementById('HelloWorld'));
