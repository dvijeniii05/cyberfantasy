import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {TabProps} from '../../navigation/navigationTypes';
import {styles} from './ProductCard.style';
import {TabScreenNames} from '../../../ScreenNames';

interface ItemProps {
  desc: string;
  src: string;
}

const ProductCard = (props: ItemProps, nav: TabProps) => {
  return !!props.desc ? (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() =>
        nav.navigate(TabScreenNames.ItemModal, {
          Screen: TabScreenNames.ItemInfo,
        })
      }
    >
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
