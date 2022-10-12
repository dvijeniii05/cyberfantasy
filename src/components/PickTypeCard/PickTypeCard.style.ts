import {TextStyle, ViewStyle} from 'react-native';
import {COLORS} from '../../../COLORS';
import {HomeScreenDefaultWidth} from '../../constants/dimension';

const parentContainer: ViewStyle = {
  backgroundColor: COLORS.darkGrey,
  width: HomeScreenDefaultWidth,
  height: 0.3 * HomeScreenDefaultWidth,
  borderRadius: 0.1 * HomeScreenDefaultWidth,
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
};

const textStyle: TextStyle = {
  color: 'white',
};

export const styles = {
  parentContainer,
  textStyle,
};
