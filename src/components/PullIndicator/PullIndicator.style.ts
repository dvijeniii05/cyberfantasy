import { ViewStyle } from "react-native";
import { COLORS } from "../../../COLORS";
import { HomeScreenDefaultWidth, WIDTH } from "../../constants/dimension";

const parentContainer: ViewStyle = {
    height:20,
    width: WIDTH,
    justifyContent:'center',
    alignItems:'center'

}

const horizontalBar: ViewStyle = {
    width:0.3*HomeScreenDefaultWidth,
    height:4,
    backgroundColor: COLORS.primary,
    borderRadius:4
}

export const styles = {
    parentContainer,
    horizontalBar
}