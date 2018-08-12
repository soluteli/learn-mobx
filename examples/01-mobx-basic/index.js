import React from "react";
import {render} from "react-dom";
import {observable, action} from "mobx";
import {observer} from "mobx-react";
import DevTools from "mobx-react-devtools";

class AppState {
  @observable timer = 0;

  constructor() {
    setInterval(() => {
      this.timer += 1;
    }, 1000);
  }

  @action.bound
  reset() {
    this.timer = 0;
  }
}

const TimerView = observer(({appState}) => (
  <button onClick={appState.reset}>Seconds passed: {appState.timer}</button>
));


const App = () => (
  <div>
    <TimerView appState={new AppState()}/> <DevTools />
  </div>
)

export default App
