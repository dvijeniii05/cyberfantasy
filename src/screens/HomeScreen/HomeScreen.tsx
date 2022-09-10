import React from 'react';
import {SafeAreaView} from 'react-native';
import ForyouCard from '../../components/ForyouCard/ForyouCard';
import GreetingLine from '../../components/GreetingsLine/Greetingsline';
import Products from '../../components/Products/Products';
import {styles} from './HomeScreen.styles';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <GreetingLine userName="User" />
      <ForyouCard content="Here is a list of items we picked specially for you according to your answers and preferences" />
      <Products />
    </SafeAreaView>
  );
};

export default HomeScreen;
