import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {StackProps} from '../../navigation/navigationTypes';
import {styles} from './ProductCard.style';
import {StackScreenNames} from '../../../ScreenNames';
import {DataProps, fetchSingleProduct} from '../../redux/slices/productsSlice';
import {productStore} from '../../redux/stores/productsStore';

const ProductCard = (props: DataProps, nav: StackProps) => {
  const submitData = () => {
    productStore.dispatch(fetchSingleProduct(props.productUrl));
    nav.navigate(StackScreenNames.ItemInfo, {
      props: props,
    });
  };
  return !!props.shortDesc ? (
    <TouchableOpacity style={styles.productContainer} onPress={submitData}>
      <Image
        source={{uri: props.src}}
        style={styles.imageStyle}
        resizeMode='contain'
      />
      <Text style={styles.descriptionStyle}>
        {`${props.shortDesc?.slice(0, 20)}...`}
      </Text>
    </TouchableOpacity>
  ) : null;
};

export default ProductCard;
