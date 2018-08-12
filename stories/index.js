/**
 * @author: zhangyh-k@glondon.com
 * @description:
 * @Date: 2018/8/10 22:48
 */
import React from 'react';
import {storiesOf} from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import App from '../examples/01-mobx-basic';

storiesOf('Mobx Learn', module)
  .add('basic', () => (
    <App/>
  ))
