import {TextStyle, ViewStyle} from 'react-native';
import {COLORS} from '../../../COLORS';
import { WIDTH } from '../../constants/dimension';

const mainContainer: ViewStyle = {
  height: 200,
  width: WIDTH*0.9,
  overflow: 'hidden',
  backgroundColor:'red',
  borderRadius:20,
  marginTop:10
};

const imageBackground: ViewStyle = {
    flex:1,
    justifyContent:'flex-end',
    padding:15
};

const buttonBackground: ViewStyle = {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'
};

const textContainer: TextStyle = {
    width:'80%',
}

const bluredImage: ViewStyle = {
    height:80,
    width:'100%',
    borderRadius:10,
    padding: 5,

}

export const styles = {
  mainContainer,
  imageBackground,
  buttonBackground,
  bluredImage,
  textContainer
};
