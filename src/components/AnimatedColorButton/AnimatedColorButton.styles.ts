import {TextStyle, ViewStyle} from 'react-native';
import {COLORS} from '../../../COLORS';
import {HomeScreenDefaultWidth} from '../../constants/dimension';

const parentContainer: ViewStyle = {
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
  width: HomeScreenDefaultWidth * 0.7,
  fontSize: 16,
};

const iconContainer: ViewStyle = {
  height: '100%',
  width: '10%',
  justifyContent: 'center',
};

const pressableStyle: ViewStyle = {
  backgroundColor: COLORS.darkGrey,
  width: HomeScreenDefaultWidth,
  height: 0.3 * HomeScreenDefaultWidth,
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
  iconContainer,
  textContainer,
  pressableStyle,
};
