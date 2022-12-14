import {TextStyle, ViewStyle} from 'react-native';
import {COLORS} from '../../../COLORS';
import {FontNames} from '../../assets/FontsNames';
import {HomeScreenDefaultWidth} from '../../constants/dimension';

const parentContainer: ViewStyle = {
  backgroundColor: COLORS.secondary,
  width: HomeScreenDefaultWidth * 0.9,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
  paddingVertical: 15,
  shadowOffset: {width: 20, height: 20},
  shadowColor: COLORS.secondary,
  shadowRadius: 15,
  shadowOpacity: 1,
};

const textStyle: TextStyle = {
  fontSize: 16,
  color: COLORS.primary_light,
};

const customFont: TextStyle = {
  fontFamily: FontNames.mainFont,
  letterSpacing: 2,
};

export const styles = {
  parentContainer,
  textStyle,
  customFont,
};
