import React from 'react';
import {View} from 'react-native';
import {styles} from './PullIndicator.style';

const PullIndicator = () => {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.horizontalBar} />
    </View>
  );
};

export default PullIndicator;
