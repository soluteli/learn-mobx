import React, {Component} from 'react';
import {observer} from 'mobx-react';

import {generateStuff} from '../stores/domain-state';
import * as history from '../stores/time';

export default observer(() => (<div className="funstuff">
  <button onClick={generateItems} title="generate 50 boxes">generate 500 boxes</button>
  <button onClick={previous} title="previous state">上一步</button>
  <button onClick={next} title="next state">下一步</button>
</div>));

function generateItems() {
  generateStuff(50);
}

function previous() {
  history.previousState();
}

function next() {
  history.nextState();
}