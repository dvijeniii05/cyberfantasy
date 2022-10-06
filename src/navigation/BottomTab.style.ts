import {ViewStyle} from 'react-native';
import { COLORS } from '../../COLORS';

const screenOption: ViewStyle = {
  position: 'absolute',
  alignSelf: 'center',
  marginHorizontal: 40,
  bottom: 30,
  height:60,
  borderRadius:30,
  backgroundColor:COLORS.darkGrey,
};

const iconStyle: ViewStyle = {
  position: 'absolute',
  top: '50%',
}

export const styles = {
  screenOption,
  iconStyle
};
