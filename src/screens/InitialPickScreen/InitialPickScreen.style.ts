import {TextStyle, View, ViewStyle} from 'react-native';
import {COLORS} from '../../../COLORS';
import {HomeScreenDefaultWidth} from '../../constants/dimension';

const parentContainer: ViewStyle = {
  backgroundColor: COLORS.primary,
  flex: 1,
  justifyContent: 'space-evenly',
  alignItems: 'flex-start',
  paddingHorizontal: 15,
};

const buttonContainer: ViewStyle = {
  backgroundColor: 'red',
  width: HomeScreenDefaultWidth,
  height: HomeScreenDefaultWidth,
};

const backgroundImageStyle: ViewStyle = {
  flex: 1,
};

const textStyle: TextStyle = {};

export const styles = {
  parentContainer,
  buttonContainer,
  backgroundImageStyle,
  textStyle,
};
