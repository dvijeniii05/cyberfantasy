import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import AnimatedCollapseButton from '../../components/AnimatedCollapseButton/AnimatedCollapseButton';
import AnimatedColorButton from '../../components/AnimatedColorButton/AnimatedColorButton';
import {styles} from './InitialPickScreen.style';

const InitialPickScreen = () => (
  <ImageBackground
    style={styles.parentContainer}
    source={require('../../assets/pick1.jpg')}
  >
    <AnimatedCollapseButton
      text={`Press here if you are aware of your skin type. You will be promted to pick your problems and issues.`}
    />
    <AnimatedCollapseButton
      text={`Press here if you would like to complete a questionare to determine your skin type and pressent problems.`}
    />
  </ImageBackground>
);

export default InitialPickScreen;
