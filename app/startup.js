import React from 'react';

// see more http://babeljs.io/docs/learn-es2015/

var fibonacci = {
    [Symbol.iterator]: function*() {
        var pre = 0, cur = 1;
        for (;;) {
            var temp = pre;
            pre = cur;
            cur += temp;
            yield cur;
        }
    }
};

for (var n of fibonacci) {
    // truncate the sequence at 1000
    if (n > 1000) {
        break;
    }
    console.log(n);
}


import HelloWorld from 'es6!./components/HelloWorld';

React.render(<HelloWorld name="Jarek"/>, document.getElementById('HelloWorld'));
