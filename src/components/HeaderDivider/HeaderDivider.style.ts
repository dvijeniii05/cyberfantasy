import {TextStyle, ViewStyle} from 'react-native';
import { COLORS } from '../../../COLORS';
import {HomeScreenDefaultWidth} from '../../constants/dimension';

const parentContainer: ViewStyle = {
  width: HomeScreenDefaultWidth,
  marginTop: 15,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const leftTextStyle: TextStyle = {
  fontSize: 16,
  fontWeight: '600',
  color: COLORS.primary_light
};

const rightTextStyle: TextStyle = {
  fontSize: 14,
  color: COLORS.primary_light
};

const viewAllButton: ViewStyle = {};

export const styles = {
  parentContainer,
  leftTextStyle,
  rightTextStyle,
  viewAllButton,
};
