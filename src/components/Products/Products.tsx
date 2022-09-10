import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './Products.style';

const Products = () => {
  return (
    <View style={styles.parentContainer}>
      <FlatList />
    </View>
  );
};

export default Products;
