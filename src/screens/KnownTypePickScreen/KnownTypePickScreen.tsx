import React from 'react';
import {FlatList, ListRenderItem, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AnimatedColor from '../../components/AnimatedColorButton/AnimatedColorButton';
import PickTypeCard from '../../components/PickTypeCard/PickTypeCard';
import {KnownIssuesData} from '../../constants/KnownIssuesData';
import {styles} from './KnownTypePickScreen.style';

interface ItemType {
  key: number;
  text: string;
}

const KnownTypePick = (navigation: any) => {
  const renderItem: ListRenderItem<ItemType> = ({item}) => {
    return <AnimatedColor text={item.text} style={styles.cardStyle} />;
  };

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingstyle}>Pick your issues</Text>
      </View>
      <FlatList
        data={KnownIssuesData}
        renderItem={renderItem}
        contentContainerStyle={styles.listStyle}
      />
    </SafeAreaView>
  );
};

export default KnownTypePick;
