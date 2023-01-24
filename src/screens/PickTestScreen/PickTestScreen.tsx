import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './PickTestScreen.style';

const PickTestScreen = () => {
  return (
    <SafeAreaView style={styles.parentConatiner}>
      <View style={styles.headingContaner}>
        <Text style={styles.headingText}>Pick one test</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}></TouchableOpacity>
        <TouchableOpacity style={styles.button}></TouchableOpacity>
        <TouchableOpacity style={styles.button}></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PickTestScreen;
