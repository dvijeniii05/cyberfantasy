import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {COLORS} from '../../../COLORS';
import {HomeScreenDefaultWidth, WIDTH} from '../../constants/dimension';

const backgroundContainer: ViewStyle = {
  backgroundColor: COLORS.secondary,
  flex: 1,
  alignItems: 'center',
};

const parentContainer: ViewStyle = {
  alignItems: 'center',
  flex: 1,
  width: HomeScreenDefaultWidth,
};

const imageContainer: ViewStyle = {
  flex: 3,
  width: WIDTH,
  justifyContent: 'center',
};

const imageStyle: ImageStyle = {
  height: '90%',
};

const titleContainer: ViewStyle = {
  flex: 1,
};

const titleStyle: TextStyle = {
  padding: 5,
  fontSize: 20,
  color: COLORS.primary_light,
};

const descContainer: ViewStyle = {
  backgroundColor: 'red',
  flex: 5,
  width: WIDTH,
  paddingHorizontal: 20,
};

export const styles = {
  backgroundContainer,
  parentContainer,
  imageContainer,
  imageStyle,
  titleContainer,
  titleStyle,
  descContainer,
};
