import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './ForyouCard.styles';

interface Props {
  content: string;
}

const ForyouCard = (props: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Text>{props.content}</Text>
    </View>
  );
};

export default ForyouCard;
