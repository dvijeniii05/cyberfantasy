import React from 'react';
import {FlatList, View} from 'react-native';
import DUMMY_POSTS from '../../constants/homeScreenData';
import ProductCard from '../ProducCard/ProductCard';
import {styles} from './Products.style';

const Products = () => {
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
