import {ViewStyle, TextStyle} from 'react-native';
import {COLORS} from '../../../COLORS';
import {FontNames} from '../../assets/FontsNames';
import {
  deafultHeadingFontSize,
  HomeScreenDefaultWidth,
} from '../../constants/dimension';

const parentConatiner: ViewStyle = {
  flex: 1,
  backgroundColor: COLORS.primary,
  alignItems: 'center',
};

const headingContaner: ViewStyle = {
  marginTop: 20,
};

const headingText: TextStyle = {
  fontFamily: FontNames.mainFont,
  fontSize: deafultHeadingFontSize,
};

const buttonContainer: ViewStyle = {
  backgroundColor: 'red',
  justifyContent: 'space-between',
  flex: 1,
};

const button: ViewStyle = {
  height: 200,
  width: HomeScreenDefaultWidth,
  backgroundColor: 'green',
};

export const styles = {
  parentConatiner,
  headingContaner,
  headingText,
  buttonContainer,
  button,
};
