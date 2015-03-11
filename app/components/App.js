
define(function (require, exports, module) {
    var React = require('react');

    var App = React.createClass({
        render() {
            return <div>Hello World!</div>;
        }
    });

    //class App extends React.Component {
    //    render() {
    //        return <div>Hello {this.props.name}</div>;
    //    }
    //}

    module.exports = App;
});