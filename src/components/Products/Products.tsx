import React from 'react';
import {FlatList, Text, View} from 'react-native';
import DUMMY_POSTS from '../../constants/homeScreenData';
import {styles} from './Products.style';

interface ItemProps {
  desc: string;
  image: string;
}

const Products = () => {
  const ProductCard = (props: ItemProps) => {
    return (
      <View style={styles.productContainer}>
        <Text>{props.image}</Text>
        <Text>{props.desc}</Text>
      </View>
    );
  };
  return (
    <View style={styles.parentContainer}>
      <FlatList
        data={DUMMY_POSTS}
        renderItem={({item}) => ProductCard(item)}
        horizontal
      />
    </View>
  );
};

export default Products;
