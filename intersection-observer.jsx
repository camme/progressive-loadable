/* 
 * This high-level component can be used to trigger a unction when the obect is visible.
 * It has a very simple fallback or browsers that dont support the IntersectionObserver,
 * it just triggers the visible function directly.
 *
 */

import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

class IntersectionObserverComponent extends React.Component {

    componentDidMount () {
        const {root, threshold, onVisible } = this.props;
        if (this.io) {
            register(root, threshold, this.io, onVisible);
        }
    }

    render () {
        return (
            <div ref={(io) => { this.io = io; }}>{this.props.children}</div>
        );
    }

}

const create = (root, threshold) => {

    const intersectionOptions = {
        threshold: [threshold],
    };

    if (root) {
        intersectionOptions.root = document.querySelector(root);
    }

    // This handles when an element is visible.
    // If its observed we asume it has a visible function and we call it in a crude way.
    if (window.IntersectionObserver) {

        return new IntersectionObserver( function(entries) {
            entries.forEach(entry => {

                if (entry.isIntersecting && entry.intersectionRatio > 0) {
                    if (typeof entry.target.__intersectionObserverInfo.onVisible === 'function') {
                        entry.target.__intersectionObserverInfo.onVisible();
                        delete entry.target.__intersectionObserverInfo.onVisible;
                    }
                    this.unobserve(entry.target);
                }
            });
        }, intersectionOptions);

    } 

    return {
        observe: (target) => {
            if (target) {
                if (typeof target.__intersectionObserverInfo.onVisible === 'function') {
                    target.__intersectionObserverInfo.onVisible();
                    delete target.__intersectionObserverInfo.onVisible;
                }
            }
        }
    };

};

const intersectionObserverList = {};

const register = (root, threshold = .5, element, onVisible) => {

    let key = `${root ? root : 'root' }-${threshold}`;

    let intersectionObserver = intersectionObserverList[key] = intersectionObserverList[key] || create(root, threshold);

    if (!element.__intersectionObserverInfo) {

        element.__intersectionObserverInfo = {
            onVisible,
        };

        intersectionObserver.observe(element);

    }

};

IntersectionObserverComponent.propTypes = {
    children: PropTypes.node,
    element: PropTypes.object,
    onVisible: PropTypes.func,
    threshold: PropTypes.number,
    root: PropTypes.string,
};

export default IntersectionObserverComponent;
