import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './ProceedButtonImage.style';

const ProceedButton = () => {
  return (
    <View style={styles.parentContainer}>
      <Image source={require('../../assets/icons/forward_arrow.png')} />
    </View>
  );
};

export default ProceedButton;
