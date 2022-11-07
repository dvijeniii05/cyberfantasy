import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './SpecificCard.style';

interface ItemProps {
  desc: string;
  image: string;
}

const SpecificCard = (props: ItemProps) => {
  return (
    <View style={styles.mainContainer}>
      {/* <Text>{props.desc}</Text> */}
      <Image
        source={{uri: props.image}}
        style={styles.imageStyle}
        resizeMode='contain'
      />
      <Text style={styles.nameStyle}>{props.desc}</Text>
    </View>
  );
};

export default SpecificCard;
