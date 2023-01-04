import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, FlatList} from 'react-native';
import DUMMY_POSTS from '../../constants/homeScreenData';
import {StackProps} from '../../navigation/navigationTypes';
import ProductCard from '../ProductCard/ProductCard';
import SpecificCard from '../SpecificCard/SpecificCard';
import {styles} from './BrowseSpecific.style';
import DummyCard from './DummyCard';

interface Props {
  data: any[];
}

const Dummy = [
  {
    src: 'https://boots.scene7.com/is/image/Boots/10061013?op_sharpen=1',
    shortDesc: 'Origins Checks and Balances Frothy Face Wash 150ml',
    productUrl:
      'https://www.boots.com/origins-checks-and-balances-frothy-face-wash-5fl-oz-150ml-10061013',
    ratingStars: 'rating4_5',
    ratingVotes: '(255)',
  },
  {
    src: 'https://boots.scene7.com/is/image/Boots/10245209?op_sharpen=1',
    shortDesc: 'Origins Original Skin Matte Gel Face Moisturiser 50ml',
    productUrl:
      'https://www.boots.com/origins-original-skin-matte-moisturizer-with-willowherb-10245209',
    ratingStars: 'rating4',
    ratingVotes: '(42)',
  },
  {
    src: 'https://boots.scene7.com/is/image/Boots/10271958?op_sharpen=1',
    shortDesc:
      'Avène Les Essentiels Revitalizing Nourishing Cream Moisturiser for Dry, Sensitive Skin 50ml',
    productUrl:
      'https://www.boots.com/avene-les-essentiels-revitalizing-nourishing-cream-moisturiser-for-dry-sensitive-skin-50ml-10271958',
    ratingStars: 'rating4_5',
    ratingVotes: '(58)',
  },
  {
    src: 'https://boots.scene7.com/is/image/Boots/10302440?op_sharpen=1',
    shortDesc:
      'Vichy Neovadiol Perimenopause Plumping Day Cream for Normal to Combination Skin 50ml',
    productUrl:
      'https://www.boots.com/vichy-neovadiol-perimenopause-plumping-day-cream-for-normal-to-combination-skin-50ml-10302440',
    ratingStars: 'rating5',
    ratingVotes: '(114)',
  },
];

const BrowseSpecific = (props: Props) => {
  return (
    <View style={styles.parentContainer}>
      <FlatList
        data={Dummy}
        renderItem={({item}) => DummyCard(item)}
        numColumns={2}
      />
    </View>
  );
};

export default BrowseSpecific;
