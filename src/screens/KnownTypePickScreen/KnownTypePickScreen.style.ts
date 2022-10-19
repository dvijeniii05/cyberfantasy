import {TextStyle, ViewStyle} from 'react-native';
import {COLORS} from '../../../COLORS';
import {HomeScreenDefaultWidth} from '../../constants/dimension';

const backgroundContainer: ViewStyle = {
  backgroundColor: COLORS.primary,
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center', //REMOVE ONCE FINISHED STYLING
};

const listStyle: ViewStyle = {
  flex: 1,
  marginTop: 10,
  width: HomeScreenDefaultWidth,
  alignItems: 'center',
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
  backgroundContainer,
  listStyle,
  cardStyle,
  headingContainer,
  headingstyle,
};
