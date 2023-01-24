import {TextStyle, ViewStyle} from 'react-native';
import {COLORS} from '../../../COLORS';
import {FontNames} from '../../assets/FontsNames';
import {
  deafultHeadingFontSize,
  HomeScreenDefaultWidth,
} from '../../constants/dimension';

const backgroundContainer: ViewStyle = {
  backgroundColor: COLORS.primary,
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center', //REMOVE ONCE FINISHED STYLING
};

const contentContainerStyle: ViewStyle = {
  flex: 1,
  width: HomeScreenDefaultWidth,
  alignItems: 'center',
};

const listStyle: ViewStyle = {
  marginVertical: 10,
};

const cardStyle: ViewStyle = {
  marginVertical: 10,
};

const headingContainer: ViewStyle = {
  marginTop: 20,
};

const headingstyle: TextStyle = {
  fontSize: deafultHeadingFontSize,
  fontFamily: FontNames.mainFont,
};

export const styles = {
  backgroundContainer,
  contentContainerStyle,
  listStyle,
  cardStyle,
  headingContainer,
  headingstyle,
};
