import React from 'react';
import {View, Text, Image} from 'react-native';
import {WIDTH} from '../../constants/dimension';
import {DataProps} from '../../redux/slices/productsSlice';

const DummyCard = (props: DataProps) => {
  return !!props.shortDesc ? (
    <View
      style={{
        width: WIDTH * 0.45,
        height: WIDTH * 0.45,
        backgroundColor: 'green',
      }}
    >
      <View style={{height: '80%'}}>
        <Image
          source={{uri: props.src}}
          resizeMode='contain'
          style={{height: 50}}
        />
      </View>
      <View style={{height: '20%'}}>
        <Text>{props.shortDesc}</Text>
      </View>
    </View>
  ) : null;
};

export default DummyCard;
