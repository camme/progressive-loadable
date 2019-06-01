import React from 'react';
import IntersectionObserver from './intersection-observer';

const ProgressiveLoadable = (LoadableComponent, options = { threshold: .3 }) => {

    class Progressive extends React.Component {

        constructor (props, context) {

            super(props, context);

            this.state = {
                load: process.title !== 'browser',
            };

        }

        visible () {
            this.setState({load: true});
        }

        render () {

            let content = null; 

            if (this.state.load) {
                content = (<LoadableComponent { ...this.props } />);
            } else {
                content = (<div dangerouslySetInnerHTML={{__html: '' }} />);
            }

            return (
                <IntersectionObserver root=".main-content" onVisible={this.visible.bind(this)} threshold={options.threshold}>{ content }</IntersectionObserver>
            );

        }

    }

    return Progressive;

};

export default ProgressiveLoadable;
