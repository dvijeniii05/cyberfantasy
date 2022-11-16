import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './ProductCard.style';

interface ItemProps {
  desc: string;
  src: string;
}

const ProductCard = (props: ItemProps) => {
  return !!props.desc ? (
    <TouchableOpacity style={styles.productContainer} onPress={() => {}}>
      <Image
        source={{uri: props.src}}
        style={styles.imageStyle}
        resizeMode='contain'
      />
      <Text style={styles.descriptionStyle}>
        {`${props.desc?.slice(0, 20)}...`}
      </Text>
    </TouchableOpacity>
  ) : null;
};

export default ProductCard;
