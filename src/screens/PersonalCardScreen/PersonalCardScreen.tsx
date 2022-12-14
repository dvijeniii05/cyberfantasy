import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import BrowseSpecific from '../../components/BrowseSpecific/BrowseSpecific';
import ExplanationCard from '../../components/ExplanationCard/ExplanationCard';
import {TabParams} from '../../navigation/navigationTypes';
import {RootState} from '../../redux/stores/mainStore';
import {styles} from './PersonalCardScreen.style';

type NavigationProps = BottomTabScreenProps<TabParams, 'PersonalCard'>;

const PersonalCardScreen = (navigation: NavigationProps) => {
  const products = useSelector(
    (state: RootState) => state.productsReducer.data
  );
  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <StatusBar barStyle={'light-content'} />
      <ExplanationCard />
      <BrowseSpecific data={products} />
    </SafeAreaView>
  );
};

export default PersonalCardScreen;
