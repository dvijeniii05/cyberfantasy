import {TextStyle, ViewStyle} from 'react-native';
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
};

const rightTextStyle: TextStyle = {
  fontSize: 14,
};

const viewAllButton: ViewStyle = {};

export const styles = {
  parentContainer,
  leftTextStyle,
  rightTextStyle,
  viewAllButton,
};
