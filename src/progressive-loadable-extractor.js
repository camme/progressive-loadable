import React from 'react';

const context = {
    extractor: () => {}
};

const ProgressiveLoadableContext = React.createContext(context);

export const ProgressiveLoadableProvider = ProgressiveLoadableContext.Provider
export const ProgressiveLoadableConsumer = ProgressiveLoadableContext.Consumer
export default ProgressiveLoadableContext



