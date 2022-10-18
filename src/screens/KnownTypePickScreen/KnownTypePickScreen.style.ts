import {ViewStyle} from 'react-native';
import {COLORS} from '../../../COLORS';

const backgroundContainer: ViewStyle = {
  backgroundColor: COLORS.primary,
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center', //REMOVE ONCE FINISHED STYLING
};

const listStyle: ViewStyle = {
  flex:1,
  justifyContent:'space-evenly'
}

export const styles = {
  backgroundContainer,
  listStyle
};
