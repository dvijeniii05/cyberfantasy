import {TextStyle, ViewStyle} from 'react-native';
import {COLORS} from '../../../COLORS';
import {FontNames} from '../../assets/FontsNames';
import {HomeScreenDefaultWidth} from '../../constants/dimension';

const parentView: ViewStyle = {
  width: '100%',
  height: '100%',
};

const innerContainer: ViewStyle = {
  flex: 1,
  marginVertical: 10,
  marginHorizontal: 20,
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

const textContainer: TextStyle = {
  width: HomeScreenDefaultWidth * 0.8,
  fontSize: 16,
};

const pressHereStyle: TextStyle = {
  fontFamily: FontNames.mainFont,
};

const chevronLeft: ViewStyle = {
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
};

const chevronRight: ViewStyle = {
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
};

const parentContainer: ViewStyle = {
  height: 0.4 * HomeScreenDefaultWidth,
  borderRadius: 0.08 * HomeScreenDefaultWidth,
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  borderColor: COLORS.darkGrey,
};

export const styles = {
  innerContainer,
  parentContainer,
  chevronLeft,
  chevronRight,
  textContainer,
  parentView,
  pressHereStyle,
};
