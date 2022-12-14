import {TextStyle, ViewStyle} from 'react-native';
import {COLORS} from '../../../COLORS';
import {FontNames} from '../../assets/FontsNames';
import {HEIGHT, ScreenHeight} from '../../constants/dimension';

const imageContainer: ViewStyle = {
  flex: 1,
};

const parentContainer: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-between',
};

const parentLabelContainer: ViewStyle = {
  top: 50,
};

const labelText: TextStyle = {
  fontFamily: FontNames.mainFont,
  fontSize: 35,
};

const loginLabelStyle: TextStyle = {
  color: COLORS.primary_light,
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
  imageContainer,
  parentContainer,
  parentLabelContainer,
  labelText,
  registerLabelStyle,
  loginLabelStyle,
  registerButtonStyle,
};
