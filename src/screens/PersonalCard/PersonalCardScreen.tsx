import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ExplanationCard from '../../components/ExplanationCard/ExplanationCard';
import {TabParams} from '../../navigation/navigationTypes';
import {styles} from './PersonalCardScreen.style';

type NavigationProps = BottomTabScreenProps<TabParams, 'PersonalCard'>;

const PersonalCardScreen = (navigation: NavigationProps) => {
  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <ExplanationCard />
      {/* <List/> */}
    </SafeAreaView>
  );
};

export default PersonalCardScreen;
