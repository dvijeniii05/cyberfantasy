import {TextStyle, ViewStyle} from 'react-native';
import {COLORS} from '../../../COLORS';
import {FontNames} from '../../assets/FontsNames';
import {HEIGHT, ScreenHeight} from '../../constants/dimension';

const parentImageContainer: ViewStyle = {
  flex: 1,
  alignItems: 'center',
};

const parentLabelContainer: ViewStyle = {
  top: 100,
};

const labelText: TextStyle = {
  fontFamily: FontNames.mainFont,
  fontSize: 35,
};

const buttonsContainer: ViewStyle = {
  position: 'absolute',
  bottom: 40,
  height: HEIGHT * 0.15,
  justifyContent: 'space-between',
};

const loginLabelStyle: TextStyle = {
  color: COLORS.primary_light,
  fontFamily: FontNames.mainFont,
  letterSpacing: 2,
};

const registerLabelStyle: TextStyle = {
  ...loginLabelStyle,
  color: COLORS.secondary_dark,
};

const registerButtonStyle: ViewStyle = {
  backgroundColor: COLORS.primary,
  borderWidth: 2,
  borderColor: COLORS.secondary_dark,
};

export const styles = {
  parentImageContainer,
  parentLabelContainer,
  labelText,
  buttonsContainer,
  registerLabelStyle,
  loginLabelStyle,
  registerButtonStyle,
};
