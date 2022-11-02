import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenNames} from '../../../ScreenNames';
import DefaultButton from '../../components/DefaultButton/DefaultButton';
import {StackParams} from '../../navigation/navigationTypes';
import {styles} from './LandingScreen.style';

type Props = StackScreenProps<StackParams>;

const LandingScreen = ({navigation}: Props) => {
  return (
    <ImageBackground
      source={require('../../assets/pick3.jpg')}
      style={styles.imageContainer}
    >
      <SafeAreaView style={styles.parentContainer}>
        <View style={styles.parentLabelContainer}>
          <Text style={styles.labelText}>Only.You</Text>
        </View>
        <DefaultButton
          onPress={() => navigation.navigate(StackScreenNames.InitialPick)}
          textStyle={styles.loginLabelStyle}
          label="Get Started"
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LandingScreen;
