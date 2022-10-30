import React from 'react';
import {Text, TextStyle, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './DefaultButton.style';

interface Props {
  onPress: () => void;
  label: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const DefaultButton = (props: Props) => {
  return (
    <TouchableOpacity
      style={[styles.parentContainer, props.style]}
      onPress={props.onPress}
    >
      <Text style={[styles.textStyle, props.textStyle]}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;
