import React from 'react';
import {Text, TextStyle, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontNames} from '../../assets/FontsNames';
import {styles} from './DefaultButton.style';

interface Props {
  onPress: () => void;
  label: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  customFont?: boolean;
}

const DefaultButton = (props: Props) => {
  return (
    <TouchableOpacity
      style={[styles.parentContainer, props.style]}
      onPress={props.onPress}
    >
      <Text
        style={[
          styles.textStyle,
          props.textStyle,
          props.customFont ? styles.customFont : null,
        ]}
      >
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;
