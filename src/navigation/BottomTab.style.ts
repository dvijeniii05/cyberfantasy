import {TextStyle, ViewStyle} from 'react-native';
import { COLORS } from '../../COLORS';
import { FontNames } from '../assets/FontsNames';

const screenOption: ViewStyle = {
  backgroundColor:COLORS.darkGrey,
};

const iconStyle: ViewStyle = {
  position: 'absolute',
  top: '50%',
}

const homeIconStyle = (color: string):TextStyle => {
  return {
    color: color,
    fontFamily: FontNames.mainFont,
    fontSize:25,
    letterSpacing:0,
  }
}

export const styles = {
  screenOption,
  iconStyle,
  homeIconStyle
};
