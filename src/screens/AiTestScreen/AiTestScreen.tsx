import React from 'react';
import {View, Text} from 'react-native';
import {COLORS} from '../../../COLORS';

const AiTestScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Ai Test</Text>
    </View>
  );
};

export default AiTestScreen;
