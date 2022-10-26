import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './DefaultButton.style';

const DefaultButton = () => {
  return (
    <TouchableOpacity style={styles.parentContainer}>
      <Text style={styles.textStyle}>Save</Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;
