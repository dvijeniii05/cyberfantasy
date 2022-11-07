import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import { COLORS } from '../../../COLORS';

const productContainer: ViewStyle = {
  width: 100,
  marginHorizontal: 5,
  borderRadius: 7,
  overflow:'hidden'
};

const imageStyle: ImageStyle = {
  height:'70%',
};

const descriptionStyle: TextStyle = {
  padding:2,
  fontSize:12,
  color: COLORS.primary_light
}

export const styles = {
  productContainer,
  imageStyle,
  descriptionStyle,
};
