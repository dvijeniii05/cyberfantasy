import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './DefaultButton.style';

interface Props {
  onPress: () => void;
}

const DefaultButton = (props: Props) => {
  return (
    <TouchableOpacity style={styles.parentContainer} onPress={props.onPress}>
      <Text style={styles.textStyle}>Save</Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;
