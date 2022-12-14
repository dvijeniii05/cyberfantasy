import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {StackScreenNames} from '../../../ScreenNames';
import PullIndicator from '../../components/PullIndicator/PullIndicator';
import {StackParams} from '../../navigation/navigationTypes';
import {DataProps} from '../../redux/slices/productsSlice';
import {RootState} from '../../redux/stores/mainStore';
import {styles} from './ItemInfoScreen.style';
import RenderHtml from 'react-native-render-html';
import {ScrollView} from 'react-native-gesture-handler';
import {HomeScreenDefaultWidth} from '../../constants/dimension';
import Rating from '../../components/Rating/Rating';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import {t} from 'i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import DefaultButton from '../../components/DefaultButton/DefaultButton';
import {COLORS} from '../../../COLORS';

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
    <SafeAreaView style={styles.backgroundContainer} edges={['bottom']}>
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
          <ScrollView
            showsVerticalScrollIndicator={false}
            horizontal={false}
            style={{marginBottom: 10}}
          >
            <RenderHtml
              source={source}
              contentWidth={HomeScreenDefaultWidth}
              ignoredDomTags={['font']}
              enableCSSInlineProcessing
              tagsStyles={{body: {color: 'white'}}}
            />
          </ScrollView>
          <DefaultButton
            style={{backgroundColor: COLORS.primary}}
            onPress={() =>
              navigation.navigate(StackScreenNames.WebView, {url: productUrl})
            }
            label={'More info'}
            customFont={true}
            textStyle={{color: COLORS.secondary}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ItemInfoScreen;
