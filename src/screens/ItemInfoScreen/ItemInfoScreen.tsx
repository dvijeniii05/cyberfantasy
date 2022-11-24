import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {StackScreenNames} from '../../../ScreenNames';
import PullIndicator from '../../components/PullIndicator/PullIndicator';
import {StackParams} from '../../navigation/navigationTypes';
import {DataProps} from '../../redux/slices/productsSlice';
import {RootState} from '../../redux/stores/productsStore';
import {styles} from './ItemInfoScreen.style';
import RenderHtml from 'react-native-render-html';
import {HomeScreenDefaultWidth} from '../../constants/dimension';

type ScreenProps = StackScreenProps<StackParams, StackScreenNames.ItemInfo>;

const ItemInfoScreen = ({route, navigation}: ScreenProps) => {
  const {productUrl, shortDesc, src}: DataProps = route.params.props;

  const productData = useSelector(
    (state: RootState) => state.productsReducer.data
  );
  console.log('PRODUCT_URL', productUrl);
  const fullDesc = productData.filter((x) => {
    console.log('INSIDE_FILTER', x.productUrl);
    if (x.productUrl === productUrl) {
      return x.fullDesc;
    }
  });
  console.log('NEW_DATA', fullDesc);

  const source = {
    html: `${fullDesc[0]?.fullDesc}`,
  };

  return (
    <View style={styles.backgroundContainer}>
      <PullIndicator />
      <View style={styles.parentContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: src}}
            resizeMode='contain'
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>{shortDesc}</Text>
        </View>
        <View style={styles.descContainer}>
          <RenderHtml source={source} contentWidth={HomeScreenDefaultWidth} />
        </View>
      </View>
    </View>
  );
};

export default ItemInfoScreen;
