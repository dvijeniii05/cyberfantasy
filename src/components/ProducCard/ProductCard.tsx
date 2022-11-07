import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './ProductCard.style';

interface ItemProps {
  desc: string;
  image: string;
}

const ProductCard = (props: ItemProps) => {
  return (
    <TouchableOpacity style={styles.productContainer} onPress={() => {}}>
      <Image
        source={{uri: props.image}}
        style={styles.imageStyle}
        resizeMode='contain'
      />
      <Text style={styles.descriptionStyle}>
        {`${props.desc.slice(0, 20)}...`}
      </Text>
    </TouchableOpacity>
  );
};

export default ProductCard;
