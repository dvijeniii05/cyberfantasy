import React from 'react';
import {SafeAreaView} from 'react-native';
import ForyouCard from '../../components/ForyouCard/ForyouCard';
import GreetingLine from '../../components/GreetingsLine/Greetingsline';
import Products from '../../components/Products/Products';
import {styles} from './HomeScreen.styles';
import {useTranslation} from 'react-i18next';

const HomeScreen = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <GreetingLine userName="Jalya" />
      <ForyouCard content={t('forYouCard.text')} />
      <Products />
    </SafeAreaView>
  );
};

export default HomeScreen;
