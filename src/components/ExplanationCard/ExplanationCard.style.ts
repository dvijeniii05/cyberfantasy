import { TextStyle, ViewStyle } from "react-native";
import { COLORS } from "../../../COLORS";
import { HomeScreenDefaultWidth } from "../../constants/dimension";

const parentContainer: ViewStyle = {
    padding: 10,
    justifyContent:'center',
    alignItems:'center'
}

const textStyle: TextStyle = {
    fontSize:16,
    textAlign:'center',
    color: COLORS.primary_light
}

export const styles = {
    parentContainer,
    textStyle
}