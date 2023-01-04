import React from 'react';
import {View, Text, Image} from 'react-native';
import {StackProps} from '../../navigation/navigationTypes';
import {styles} from './SpecificCard.style';

interface ItemProps {
  desc: string;
  src: string;
}

const SpecificCard = (props: DataProps, nav: StackProps) => {
  return !!props.desc ? (
    <View style={styles.mainContainer}>
      <Image
        source={{uri: props.src}}
        style={styles.imageStyle}
        resizeMode='contain'
      />
      <Text style={styles.nameStyle}>{props.desc}</Text>
    </View>
  ) : null;
};

export default SpecificCard;
