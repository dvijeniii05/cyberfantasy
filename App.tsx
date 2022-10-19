/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppDrawer from './src/navigation/AppDrawer';
import './i18';
import {RecoilRoot} from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <AppDrawer />
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
