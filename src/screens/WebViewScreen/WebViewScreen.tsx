import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {COLORS} from '../../../COLORS';
import {StackScreenNames} from '../../../ScreenNames';
import CloseModalButton from '../../components/CloseModalButton/CloseModalButton';
import PullIndicator from '../../components/PullIndicator/PullIndicator';
import {StackParams} from '../../navigation/navigationTypes';
import {styles} from './WebViewScreen.style';

type ScreenProps = StackScreenProps<StackParams, StackScreenNames.WebView>;

const WebViewScreen = ({route, navigation}: ScreenProps) => {
  const {url} = route.params;
  return (
    <View style={styles.parentContainer}>
      <PullIndicator />
      <WebView source={{uri: url}} />
    </View>
  );
};

export default WebViewScreen;
