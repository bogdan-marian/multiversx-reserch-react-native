/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import HelloApp from './src/HelloApp';
import HelloNavigation from './src/HelloNavigation';
import {name as appName} from './app.json';
import 'text-encoding-polyfill'
import Joi from '@hapi/joi'

AppRegistry.registerComponent(appName, () => HelloNavigation);
