/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import HelloApp from './src/HelloApp';
import HelloNavigation from './src/HelloNavigation';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HelloNavigation);
