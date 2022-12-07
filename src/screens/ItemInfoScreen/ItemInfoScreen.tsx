import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {StackScreenNames} from '../../../ScreenNames';
import PullIndicator from '../../components/PullIndicator/PullIndicator';
import {StackParams} from '../../navigation/navigationTypes';
import {DataProps} from '../../redux/slices/productsSlice';
import {RootState} from '../../redux/stores/productsStore';
import {styles} from './ItemInfoScreen.style';
import RenderHtml from 'react-native-render-html';
import {ScrollView} from 'react-native-gesture-handler';
import {HomeScreenDefaultWidth} from '../../constants/dimension';
import Rating from '../../components/Rating/Rating';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import {t} from 'i18next';

type ScreenProps = StackScreenProps<StackParams, StackScreenNames.ItemInfo>;

const ItemInfoScreen = ({route, navigation}: ScreenProps) => {
  const {src, productUrl, shortDesc, ratingStars, ratingVotes}: DataProps =
    route.params.props;

  const productData = useSelector(
    (state: RootState) => state.productsReducer.data
  );
  const fullDesc = productData.filter((x) => {
    if (x.productUrl === productUrl) {
      return x.fullDesc;
    }
  });

  const source = {
    html: `${fullDesc[0]?.fullDesc}`,
  };

  return (
    <View style={styles.backgroundContainer}>
      <PullIndicator />
      <LoadingComponent loadingText={t('loading_indicator_text')} />

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
        <View style={styles.ratingContainer}>
          <Rating stars={ratingStars} votes={ratingVotes} />
        </View>
        <View style={styles.descContainer}>
          <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
            <RenderHtml
              source={source}
              contentWidth={HomeScreenDefaultWidth}
              ignoredDomTags={['font']}
              enableCSSInlineProcessing
              tagsStyles={{body: {color: 'white'}}}
            />
          </ScrollView>
          <TouchableOpacity
            style={{width: 100, height: 50, backgroundColor: 'green'}}
            onPress={() =>
              navigation.navigate(StackScreenNames.WebView, {url: productUrl})
            }
          >
            <Text>Press</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ItemInfoScreen;
