import React from 'react';
import {observer} from 'mobx-react';

import store from './stores/domain-state';
import Canvas from './components/canvas';

import './style.css'

let storeInstanceId = 0; // forces full re-render so that all components have the correct store

const HotReloadWrapper = observer(() =>
  <Canvas store={store} key={storeInstanceId}/>
);

export default () => (
  <div className="canvas-containe">
    <HotReloadWrapper />
  </div>
)

/**
 Replace the storeInstance if a new domain-state is available
 */
if (module.hot) {
  // accept update of dependency
  module.hot.accept("./stores/domain-state", function () {
    // obtain new store
    const newStore = require("./stores/domain-state").default;
    // replace store instance
    storeInstanceId++;
    storeInstance.set(newStore);
  });
}