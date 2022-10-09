import { TextStyle, ViewStyle } from "react-native";
import { HomeScreenDefaultWidth } from "../../constants/dimension";

const parentContainer: ViewStyle = {
    width: HomeScreenDefaultWidth,
    height: 0.3 * HomeScreenDefaultWidth,
    padding: 10,
    justifyContent:'center',
    alignItems:'center'
}

const textStyle: TextStyle = {
    fontSize:16,
    textAlign:'center'
}

export const styles = {
    parentContainer,
    textStyle
}