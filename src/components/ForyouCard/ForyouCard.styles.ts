import {ViewStyle} from 'react-native';
import {COLORS} from '../../../COLORS';

const mainContainer: ViewStyle = {
  backgroundColor: COLORS.lightGreen,
  height: 200,
  marginHorizontal: 25,
  marginTop: 20,
  borderRadius: 20,
  // borderWidth: 1,
  // borderColor: COLORS.darkGrey,
  overflow: 'hidden',
};

const imageBackground: ViewStyle = {
  flex: 1,
  justifyContent: 'flex-end',
  padding: 20,
};

const buttonBackground: ViewStyle = {
  height: 60,
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  borderRadius: 10,
};

export const styles = {
  mainContainer,
  imageBackground,
  buttonBackground,
};
