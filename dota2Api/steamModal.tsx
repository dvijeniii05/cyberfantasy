import {useNavigation} from '@react-navigation/native';
import React from 'react';
import WebView, {WebViewNavigation} from 'react-native-webview';
import {StackProps} from '../src/navigation/navigationTypes';

const SteamModal = () => {
  const navigation = useNavigation<StackProps>();
  const stateChanged = (navState: WebViewNavigation) => {
    console.log('STATE_CHANGED', navState);
    if (
      navState.url === 'http://localhost:3000/steamid/?id=76561198327662118'
    ) {
      navigation.popToTop();
    }
  };

  return (
    <WebView
      source={{uri: 'http://localhost:3000/auth/steam'}}
      onNavigationStateChange={stateChanged}
    />
  );
};

export default SteamModal;
