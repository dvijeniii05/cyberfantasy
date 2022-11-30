import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {StackScreenNames} from '../../../ScreenNames';
import {StackParams} from '../../navigation/navigationTypes';

type ScreenProps = StackScreenProps<StackParams, StackScreenNames.WebView>;

const WebViewScreen = ({route, navigation}: ScreenProps) => {
  const {url} = route.params;
  return (
    <View style={{flex: 1}}>
      <WebView source={{uri: url}} />
    </View>
  );
};

export default WebViewScreen;
