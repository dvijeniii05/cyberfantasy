import {TextStyle, ViewStyle} from 'react-native';
import {COLORS} from '../../../COLORS';
import {HomeScreenDefaultWidth} from '../../constants/dimension';

const imageBackgrouContainer: ViewStyle = {
  flex: 1,
};

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
  fontSize: 30,
};

export const styles = {
  imageBackgrouContainer,
  backgroundContainer,
  contentContainerStyle,
  listStyle,
  cardStyle,
  headingContainer,
  headingstyle,
};
