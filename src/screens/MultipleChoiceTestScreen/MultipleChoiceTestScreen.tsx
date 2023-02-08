import React from 'react';
import {View, Text} from 'react-native';
import MultipleChoiceTest from '../../components/MultipleChoiceTest/MultipleChoiceTest';

import {styles} from '../MultipleChoiceTestScreen/MultipleChoiceTestScreen.style';

const MultipleChoiceTestScreen = () => {
  return (
    <View style={styles.parentConatiner}>
      <View style={styles.headingContaner}>
        <Text>Multiple Choice Test</Text>
      </View>
      <View style={styles.testContainer}>
        <MultipleChoiceTest />
      </View>
    </View>
  );
};

export default MultipleChoiceTestScreen;
