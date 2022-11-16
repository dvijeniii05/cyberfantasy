import React from 'react';
import {View, FlatList} from 'react-native';
import DUMMY_POSTS from '../../constants/homeScreenData';
import SpecificCard from '../SpecificCard/SpecificCard';
import {styles} from './BrowseSpecific.style';

interface Props {
  data: any[];
}

const BrowseSpecific = (props: Props) => {
  return (
    <View style={styles.parentContainer}>
      <FlatList
        data={props.data}
        renderItem={({item}) => SpecificCard(item)}
        numColumns={2}
        style={styles.listStyle}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

export default BrowseSpecific;
