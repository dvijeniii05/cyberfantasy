import React from 'react';
import {View, Text} from 'react-native';
import {COLORS} from '../../../COLORS';

const ProcedureTestScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Procedure Test</Text>
    </View>
  );
};

export default ProcedureTestScreen;
