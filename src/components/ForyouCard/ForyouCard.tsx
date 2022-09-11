import React from 'react';
import {ImageBackground, Text, TouchableHighlight, View} from 'react-native';
import {styles} from './ForyouCard.styles';

interface Props {
  content: string;
}

const ForyouCard = (props: Props) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../../assets/ExploreHome1.jpeg')}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <TouchableHighlight style={styles.buttonBackground}>
          <Text>{props.content}</Text>
        </TouchableHighlight>
      </ImageBackground>
    </View>
  );
};

export default ForyouCard;
