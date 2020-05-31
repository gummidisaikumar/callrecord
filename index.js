/**
 * @format
 */

import {AppRegistry, TextInput} from 'react-native';
import App from './src/layout/App';
import {name as appName} from './app.json';
console.disableYellowBox = true;
TextInput.defaultProps.selectionColor = 'white';

AppRegistry.registerComponent(appName, () => App);
