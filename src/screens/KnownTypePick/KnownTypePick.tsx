import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PickTypeCard from '../../components/PickTypeCard/PickTypeCard';
import {styles} from './KnownTypePick.style';

const KnownTypePick = (navigation: any) => {
  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <PickTypeCard />
    </SafeAreaView>
  );
};

export default KnownTypePick;
