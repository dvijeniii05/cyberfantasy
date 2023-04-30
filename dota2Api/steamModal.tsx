import {useNavigation} from '@react-navigation/native';
import React from 'react';
import WebView, {WebViewNavigation} from 'react-native-webview';
import {StackScreenNames} from '../ScreenNames';
import {StackProps} from '../src/navigation/navigationTypes';

const SteamModal = () => {
  const navigation = useNavigation<StackProps>();
  const stateChanged = (navState: WebViewNavigation) => {
    const steamId = navState.url.substring(34);
    console.log('STEAM_ID:', steamId);
    if (navState.url === 'http://localhost:3000/steamid/?id=367396390') {
      navigation.navigate(StackScreenNames.Landing, {
        steamId: steamId,
      });
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
