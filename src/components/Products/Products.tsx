import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, View} from 'react-native';
import {TabProps} from '../../navigation/navigationTypes';
import ProductCard from '../ProductCard/ProductCard';
import {styles} from './Products.style';

interface Props {
  data: any[];
}

const Products = (props: Props) => {
  const navigation = useNavigation<TabProps>();
  return (
    <View style={styles.parentContainer}>
      <FlatList
        data={props.data}
        renderItem={({item}) => ProductCard(item, navigation)}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default Products;
