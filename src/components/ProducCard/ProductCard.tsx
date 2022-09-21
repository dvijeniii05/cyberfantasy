import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './ProductCard.style';

interface ItemProps {
  desc: string;
  image: string;
}

const ProductCard = (props: ItemProps) => {
  return (
    <View style={styles.productContainer}>
      <Text style={styles.descriptionStyle}>{props.image}</Text>
      <Text style={styles.descriptionStyle}>{props.desc}</Text>
    </View>
  );
};

export default ProductCard;
