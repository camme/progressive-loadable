import React from 'react';
import ProgressiveLoadable from './progressive-loadable';
import cleanLoadableTags from './clean-loadable-tags';
import ProgressiveLoadableExtractorContext from './progressive-loadable-extractor';

const ProgressiveLoadableExtractor = ({extractor, children}) => (<ProgressiveLoadableExtractorContext.Provider value={extractor}>{children}</ProgressiveLoadableExtractorContext.Provider>);

export {
    ProgressiveLoadable as default,
    cleanLoadableTags,
    ProgressiveLoadableExtractor
};

