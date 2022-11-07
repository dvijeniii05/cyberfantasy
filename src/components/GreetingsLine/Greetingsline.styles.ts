import {TextStyle, ViewStyle} from 'react-native';
import {COLORS} from '../../../COLORS';
import { FontNames } from '../../assets/FontsNames';

const backgroundContainer: ViewStyle = {
  width: '100%',
  alignItems: 'center',
  marginTop: 10,
};

const textStyle: TextStyle = {
  fontSize: 20,
  fontFamily: FontNames.mainFont,
  color:COLORS.primary_light
};

export const styles = {
  backgroundContainer,
  textStyle,
};
