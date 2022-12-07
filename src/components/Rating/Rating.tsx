import React from 'react';
import {Text, View} from 'react-native';
import {stars, starsCalculator} from '../../utils/starsCalculator';
import {styles} from './Rating.style';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Props {
  stars?: string;
  votes?: string;
}

const Rating = (props: Props) => {
  const starsCount = starsCalculator(props.stars);
  console.log(starsCount);

  return (
    <View style={styles.parentContainer}>
      <View style={styles.startContainer}>{stars(starsCount)}</View>

      <Text style={styles.votesContainer}>{props.votes}</Text>
    </View>
  );
};

export default Rating;
