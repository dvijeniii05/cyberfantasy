import {TextStyle, ViewStyle} from 'react-native';
import {COLORS} from '../../../COLORS';
import {HomeScreenDefaultWidth} from '../../constants/dimension';

const parentContainer: ViewStyle = {
  backgroundColor: COLORS.darkGrey,
  width: HomeScreenDefaultWidth,
  height: 0.3 * HomeScreenDefaultWidth,
  borderRadius: 0.08 * HomeScreenDefaultWidth,
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth:1,
  borderColor: COLORS.darkGrey
};

const textContainer: ViewStyle = {
  flex:1,
marginVertical:10,
marginHorizontal:20,
// backgroundColor:'red',
justifyContent:'center',
}

const textStyle: TextStyle = {
  color: 'white',
};

export const styles = {
  parentContainer,
  textStyle,
  textContainer
};
