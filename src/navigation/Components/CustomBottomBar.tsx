import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View} from 'react-native';
import {styles} from './CustomBottomBar.style';

interface Props extends BottomTabBarProps {}

const CustomBottomBar = ({state, descriptors, navigation}: Props) => {
  console.log('STATE', state);
  return <View style={styles.parentContainer}></View>;
};

export default CustomBottomBar;
