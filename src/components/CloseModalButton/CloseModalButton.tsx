import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './CloseModalButton.style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../../COLORS';

const CloseModalButton = () => {
  return (
    <TouchableOpacity style={styles.parentContainer}>
      <AntDesign name='close' size={30} color={COLORS.primary} />
    </TouchableOpacity>
  );
};

export default CloseModalButton;
