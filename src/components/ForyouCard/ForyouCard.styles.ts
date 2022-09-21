import {TextStyle, ViewStyle} from 'react-native';
import {HomeScreenDefaultWidth} from '../../constants/dimension';

const mainContainer: ViewStyle = {
  height: 0.6 * HomeScreenDefaultWidth,
  width: HomeScreenDefaultWidth,
  overflow: 'hidden',
  borderRadius: 20,
  marginTop: 10,
};

const imageBackground: ViewStyle = {
  flex: 1,
  justifyContent: 'flex-end',
  padding: 15,
};

const buttonBackground: ViewStyle = {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
};

const textContainer: TextStyle = {
  width: '80%',
};

const bluredImage: ViewStyle = {
  height: 80,
  width: '100%',
  borderRadius: 10,
  padding: 5,
};

export const styles = {
  mainContainer,
  imageBackground,
  buttonBackground,
  bluredImage,
  textContainer,
};
