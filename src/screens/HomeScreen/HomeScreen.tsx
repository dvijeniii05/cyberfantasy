import React from 'react';
import {SafeAreaView} from 'react-native';
import ForyouCard from '../../components/ForyouCard/ForyouCard';
import GreetingLine from '../../components/GreetingsLine/Greetingsline';
import Products from '../../components/Products/Products';
import {styles} from './HomeScreen.styles';
import {useTranslation} from 'react-i18next';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {TabParams} from '../../navigation/navigationTypes';
import HeaderDivider from '../../components/HeaderDivider/HeaderDivider';

type NavigationProps = BottomTabScreenProps<TabParams, 'Home'>;

const HomeScreen = ({navigation}: NavigationProps) => {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <GreetingLine userName="Jalya" />
      <ForyouCard
        content={t('forYouCard.text')}
        onPress={() => navigation.navigate('PersonalCard')}
      />
      <HeaderDivider label="New products" />
      <Products />
    </SafeAreaView>
  );
};

export default HomeScreen;
