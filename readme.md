# ProgressiveLoadable

This helps you progressively load and hydrate components when they are in the viewport. It should be used together with [react-loadable](https://www.npmjs.com/package/react-loadable)
to enable code splitting.

Code splitting and progressive hydration are extremly effective tricks to downsize the first chunks of javascript you load in the browser, but still 
showing the correct content the user loads into the browser (with server side rendering).

So instead of just server side render and then hydrate everything, 
you render everything on the server, then hydrate the parst that are visible and wait with everything that is outside the viewport until the user scrolls. 
When your component is visible, you load the chunks and hydrate the last part.


## How to use

A normal ```react-loadable``` is loaded like this

```javascript

import Loadable from 'react-loadable';
import Loading from './my-loading-component';
 
const LoadableComponent = Loadable({
  loader: () => import('./my-component'),
  loading: Loading,
});
 
export default class App extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}
```

With ProgressiveLoadable you only need to change it like this:

```javascript

import Loadable from 'react-loadable';
import Loading from './my-loading-component';
 
const LoadableComponent = Loadable({
  loader: () => import('./my-component'),
  loading: Loading,
});

// THIS IS THE EXTRA WRAPPER
const ProgressiveLoadableComponent = ProgressiveLoadable(LoadableComponent);
 
export default class App extends React.Component {
  render() {
    return <ProgressiveLoadable/>; // THIS IS CHANGED AS WELL
  }
}

```

If you want to change the default threshold (default is ```.3```, ie 30% of the component needs to be visible), you just send it as options:

```javascript

import Loadable from 'react-loadable';
import Loading from './my-loading-component';
 
const LoadableComponent = Loadable({
  loader: () => import('./my-component'),
  loading: Loading,
});

const ProgressiveLoadableComponent = ProgressiveLoadable(LoadableComponent, { threshold: .5 });
 
export default class App extends React.Component {
  render() {
    return <ProgressiveLoadable/>;
  }
}

```

## Other info

This uses the IntersectionObserver, which doesnt exists in ie 11. In ie 11, or other browsers without the IntersectionObserver, it will just assume the component
is in the viewport.
