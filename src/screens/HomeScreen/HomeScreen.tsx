import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import ForyouCard from '../../components/ForyouCard/ForyouCard';
import GreetingLine from '../../components/GreetingsLine/Greetingsline';
import {styles} from './HomeScreen.styles';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.backgroundContainer}>
            <GreetingLine/>
            <ForyouCard/>
        </SafeAreaView>
      );
};

export default HomeScreen;
