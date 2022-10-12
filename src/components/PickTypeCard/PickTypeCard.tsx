import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './PickTypeCard.style';

const PickTypeCard = () => {
  return (
    <View style={styles.parentContainer}>
      <Text style={styles.textStyle}>Some info is here</Text>
    </View>
  );
};

export default PickTypeCard;
