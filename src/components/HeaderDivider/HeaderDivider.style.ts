import { TextStyle, ViewStyle } from "react-native";
import { WIDTH } from "../../constants/dimension";

const parentContainer:ViewStyle = {
    width: WIDTH*0.9,
    marginTop: 15
}

const textStyle: TextStyle = {
    fontSize:16,
    fontWeight:'600'
}

export const styles = {
    parentContainer,
    textStyle
}