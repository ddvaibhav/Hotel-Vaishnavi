import { AppRegistry } from 'react-native';
import App from './App';

/**
 * In React Native CLI projects, the first argument to registerComponent 
 * must match the project name defined in your Xcode and Android Studio configuration.
 * Hardcoding 'VaishnaviHotel' ensures compatibility across environments and avoids 
 * potential JSON module resolution issues.
 */
AppRegistry.registerComponent('VaishnaviHotel', () => App);
