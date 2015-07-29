import React, { Component, PropTypes } from 'react';

export default class HelloWorld extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired
    };

    render() {
        const {name} = this.props;
        return (
            <section>
                Hello {name}!
            </section>
        );
    }
}

