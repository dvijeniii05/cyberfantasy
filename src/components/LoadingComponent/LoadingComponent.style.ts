import {TextStyle, ViewStyle} from 'react-native';
import {COLORS} from '../../../COLORS';
import {WIDTH, HEIGHT} from '../../constants/dimension';

const parentContainer: ViewStyle = {
  position: 'absolute',
  backgroundColor: COLORS.secondary,
  width: WIDTH,
  height: HEIGHT,
  zIndex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0.95,
};

const indicatorContainer: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};

const textContainer: TextStyle = {
  marginTop: 10,
  fontSize: 16,
  color: COLORS.primary,
};

export const styles = {
  parentContainer,
  indicatorContainer,
  textContainer,
};
