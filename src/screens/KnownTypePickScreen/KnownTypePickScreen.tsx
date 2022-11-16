import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {FlatList, ListRenderItem, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {StackScreenNames} from '../../../ScreenNames';
import AnimatedColorButton from '../../components/AnimatedColorButton/AnimatedColorButton';
import DefaultButton from '../../components/DefaultButton/DefaultButton';
import {KnownIssuesData} from '../../constants/KnownIssuesData';
import {StackParams} from '../../navigation/navigationTypes';
import {fetchProducts} from '../../slices/productsSlice';
import {AppDispatch} from '../../stores/productsStore';
import {styles} from './KnownTypePickScreen.style';

type Props = StackScreenProps<StackParams, StackScreenNames.KnownTypePick>;

interface ItemType {
  key: number;
  text: string;
}

const KnownTypePickScreen = ({navigation}: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const renderItem: ListRenderItem<ItemType> = ({item}) => {
    return <AnimatedColorButton text={item.text} style={styles.cardStyle} />;
  };

  const submitData = () => {
    dispatch(fetchProducts());
    navigation.navigate('BottomTab', {
      Screen: 'Home',
    });
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
      <DefaultButton label='Save' onPress={submitData} customFont={true} />
    </SafeAreaView>
  );
};

export default KnownTypePickScreen;
