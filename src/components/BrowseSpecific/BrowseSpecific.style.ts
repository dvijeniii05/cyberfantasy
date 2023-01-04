import {ViewStyle} from 'react-native';
import {HomeScreenDefaultWidth, WIDTH} from '../../constants/dimension';

const parentContainer: ViewStyle = {
  width: WIDTH,
  height: '100%', //or flex: 1 ??
  alignItems: 'center',
  backgroundColor: 'red',
};

const listStyle: ViewStyle = {
  width: '100%',
};

const contentContainerStyle: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const styles = {
  parentContainer,
  listStyle,
  contentContainerStyle,
};
