import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {FontNames} from '../../assets/FontsNames';
import DefaultButton from '../../components/DefaultButton/DefaultButton';
import {styles} from './LandingScreen.style';

const LandingScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/pick3.jpg')}
      style={styles.parentImageContainer}
    >
      <View style={styles.parentLabelContainer}>
        <Text style={styles.labelText}>Only.You</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <DefaultButton
          onPress={() => {}}
          textStyle={styles.loginLabelStyle}
          label='Login'
        />
        <DefaultButton
          onPress={() => {}}
          style={styles.registerButtonStyle}
          textStyle={styles.registerLabelStyle}
          label='Register'
        />
      </View>
      <View></View>
    </ImageBackground>
  );
};

export default LandingScreen;
