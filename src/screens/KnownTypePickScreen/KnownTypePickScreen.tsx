import React from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, ListRenderItem} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PickTypeCard from '../../components/PickTypeCard/PickTypeCard';
import {KnownIssuesData} from '../../constants/KnownIssuesData';
import {styles} from './KnownTypePickScreen.style';

interface ItemType {
  key: number;
  text: string;
}

const KnownTypePick = (navigation: any) => {
  const renderItem: ListRenderItem<ItemType> = ({item}) => {
    return <PickTypeCard text={item.text} />;
  };

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <FlatList
        data={KnownIssuesData}
        renderItem={renderItem}
        contentContainerStyle={styles.listStyle}
      />
    </SafeAreaView>
  );
};

export default KnownTypePick;
