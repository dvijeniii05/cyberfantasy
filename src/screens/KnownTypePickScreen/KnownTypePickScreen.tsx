import React from 'react';
import {FlatList, ListRenderItem, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenNames} from '../../../ScreenNames';
import AnimatedColorButton from '../../components/AnimatedColorButton/AnimatedColorButton';
import DefaultButton from '../../components/DefaultButton/DefaultButton';
import {KnownIssuesData} from '../../constants/KnownIssuesData';
import {styles} from './KnownTypePickScreen.style';

// type Props = StackScreenProps<TabParams>;

interface ItemType {
  key: number;
  text: string;
}

const KnownTypePickScreen = ({navigation}) => {
  const renderItem: ListRenderItem<ItemType> = ({item}) => {
    return <AnimatedColorButton text={item.text} style={styles.cardStyle} />;
  };

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingstyle}>Pick your issues</Text>
      </View>
      <FlatList
        data={KnownIssuesData}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.listStyle}
      />
      <DefaultButton onPress={() => {}} />
    </SafeAreaView>
  );
};

export default KnownTypePickScreen;
