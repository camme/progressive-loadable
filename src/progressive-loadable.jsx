import React, { useState, useContext } from 'react';
import IntersectionObserver from 'react-rawb-intersection-observer';

// import ProgressiveLoadableExtractorContext from './progressive-loadable-extractor';

const ProgressiveLoadable = (LoadableComponent, options = { threshold: .3 }) => {

    const Progressive = (props) => {

        // const context = useContext(ProgressiveLoadableExtractorContext);

        const [load, setLoad] = useState(!process.browser);

        const visible = () => {
            console.log('show', LoadableComponent);
            setLoad(true);
        };

        let content = null; 

        if (load) {
            content = (<LoadableComponent { ...props } />);
        } else {
            content = (<div dangerouslySetInnerHTML={{__html: '' }} />);
        }

        return (
            <IntersectionObserver root=".main-content" onVisible={visible} threshold={options.threshold}>{ content }</IntersectionObserver>
        );

    };

    return Progressive;

};

export default ProgressiveLoadable;
