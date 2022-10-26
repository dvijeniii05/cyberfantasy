import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './ForyouCard.styles';
import {BlurView} from '@react-native-community/blur';
import ProceedButton from '../ProceedButtonImage/ProceedButtonImage';

export interface Props {
  content: string;
  onPress?: () => void;
}

const ForyouCard = (props: Props) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../../assets/Explore7.jpeg')}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <BlurView blurType="light" style={styles.bluredImage}>
          <TouchableOpacity
            testID="foryoucard-button"
            style={styles.buttonBackground}
            onPress={props.onPress}
          >
            <Text style={styles.textContainer} testID="foryoucard-text">
              {props.content}
            </Text>
            <ProceedButton />
          </TouchableOpacity>
        </BlurView>
      </ImageBackground>
    </View>
  );
};

export default ForyouCard;
