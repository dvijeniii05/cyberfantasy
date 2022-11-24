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
import {ScrollView} from 'react-native-gesture-handler';
import {removeElement, isTag} from 'domutils';

type ScreenProps = StackScreenProps<StackParams, StackScreenNames.ItemInfo>;

const ItemInfoScreen = ({route, navigation}: ScreenProps) => {
  const {productUrl, shortDesc, src}: DataProps = route.params.props;

  const productData = useSelector(
    (state: RootState) => state.productsReducer.data
  );
  const fullDesc = productData.filter((x) => {
    if (x.productUrl === productUrl) {
      return x.fullDesc;
    }
  });
  // console.log('HTML_COMP', fullDesc[0]?.fullDesc);

  const source = {
    html: `<div dir="ltr">

<p style="font-size: medium;">&nbsp;</p>

<p style="font-size: medium;"><span style="font-family: arial, helvetica, sans-serif;"><strong>WHAT IT IS:&nbsp;</strong>A Bobbi Brown bestseller—a primer plus moisturisation for smooth makeup application (it's the best of both worlds). Rich in feel, but never greasy, this advanced face formula, with Shea Butter, instantly hydrates, softens and cushions skin.</span></p>

<p style="font-size: medium;"><font face="arial, helvetica, sans-serif">&nbsp;</font></p>

<p style="font-size: medium;"><span style="font-family: arial, helvetica, sans-serif;"><strong>WHO IT'S FOR:</strong>&nbsp;Normal to oily skin types.</span></p>

  </div>`,
  };

  function onElement(element) {
    if (element.tagName === 'p') {
      console.log('P', element);
    }
  }

  const domVisitors = {
    onElement: onElement,
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
          <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
            <RenderHtml
              source={source}
              contentWidth={150}
              ignoredDomTags={['font']}
              domVisitors={domVisitors}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default ItemInfoScreen;
