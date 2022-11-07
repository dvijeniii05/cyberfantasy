import React from 'react';
import {View, FlatList} from 'react-native';
import DUMMY_POSTS from '../../constants/homeScreenData';
import SpecificCard from '../SpecificCard/SpecificCard';
import {styles} from './BrowseSpecific.style';

const BrowseSpecific = () => {
  return (
    <View style={styles.parentContainer}>
      <FlatList
        data={DUMMY_POSTS}
        renderItem={({item}) => SpecificCard(item)}
        numColumns={2}
        style={styles.listStyle}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

export default BrowseSpecific;
