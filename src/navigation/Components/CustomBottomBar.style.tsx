import {ViewStyle} from 'react-native';
import {WIDTH} from '../../constants/dimension';

const parentContainer: ViewStyle = {
  backgroundColor: 'green',
  width: 0.8 * WIDTH,
  height: 60,
  alignSelf: 'center',
  bottom: 30,
  borderRadius: 30,
};

export const styles = {
  parentContainer,
};
