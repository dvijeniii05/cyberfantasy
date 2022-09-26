import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './ProductCard.style';

interface ItemProps {
  desc: string;
  image: string;
}

const ProductCard = (props: ItemProps) => {
  return (
    <TouchableOpacity style={styles.productContainer} onPress={() => {}}>
      <Text style={styles.descriptionStyle}>{props.image}</Text>
      <Text style={styles.descriptionStyle}>{props.desc}</Text>
    </TouchableOpacity>
  );
};

export default ProductCard;
