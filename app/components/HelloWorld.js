import React, { PropTypes } from 'react';

export default class HelloWorld extends React.Component {
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

