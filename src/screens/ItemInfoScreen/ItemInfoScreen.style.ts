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
  flex: 2.5,
  width: WIDTH,
  justifyContent: 'center',
};

const imageStyle: ImageStyle = {
  height: '90%',
};

const titleContainer: ViewStyle = {
  flex: 0.6,
  justifyContent: 'center',
};

const titleStyle: TextStyle = {
  fontSize: 18,
  color: COLORS.primary_light,
};

const ratingContainer: ViewStyle = {
  flex: 0.6,
};

const descContainer: ViewStyle = {
  flex: 5,
  width: WIDTH,
  paddingHorizontal: 20,
  paddingTop: 5,
};

export const styles = {
  backgroundContainer,
  parentContainer,
  imageContainer,
  imageStyle,
  titleContainer,
  titleStyle,
  ratingContainer,
  descContainer,
};
