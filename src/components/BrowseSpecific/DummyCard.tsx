import React from 'react';
import {View, Text, Image} from 'react-native';
import {DataProps} from '../../redux/slices/productsSlice';

const DummyCard = (props: DataProps) => {
  return !!props.shortDesc ? (
    <View style={{width: 200, heigth: 200, backgroundColor: 'green'}}>
      <Image
        source={{uri: props.src}}
        resizeMode='contain'
        style={{height: 50}}
      />
      <Text>{props.shortDesc}</Text>
    </View>
  ) : null;
};

export default DummyCard;
