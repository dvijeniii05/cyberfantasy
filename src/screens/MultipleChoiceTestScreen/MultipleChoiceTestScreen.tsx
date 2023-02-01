import React from 'react';
import {View, Text} from 'react-native';
import {COLORS} from '../../../COLORS';

const MultipleChoiceTestScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Multiple Choice Test</Text>
    </View>
  );
};

export default MultipleChoiceTestScreen;
