import { TextStyle, ViewStyle } from "react-native";
import { COLORS } from "../../../COLORS";
import { WIDTH } from "../../constants/dimension";

const parentContainer: ViewStyle ={
    width: WIDTH*0.5,
    height:30,
    flexDirection:'row',
    justifyContent:'space-evenly'
}

const startContainer: ViewStyle = {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
}

const votesContainer: TextStyle = {
    alignSelf: 'center',
    fontSize:18,
    color: COLORS.primary
}
export const styles = {
    parentContainer,
    startContainer,
    votesContainer
}