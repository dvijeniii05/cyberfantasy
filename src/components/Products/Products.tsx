import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios';
import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import DUMMY_POSTS from '../../constants/homeScreenData';
import ProductCard from '../ProducCard/ProductCard';
import {styles} from './Products.style';

interface Props {
  data: any[];
}

const Products = (props: Props) => {
  return (
    <View style={styles.parentContainer}>
      <FlatList
        data={props.data}
        renderItem={({item}) => ProductCard(item)}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default Products;
