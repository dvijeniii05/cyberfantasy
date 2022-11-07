import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { COLORS } from "../../../COLORS";
import { HomeScreenDefaultWidth } from "../../constants/dimension";

const mainContainer: ViewStyle = {
    width:HomeScreenDefaultWidth*0.5,
    height:HomeScreenDefaultWidth*0.7,
    margin:5,
    marginBottom:10,
    borderRadius:15,
    overflow:'hidden'
}

const imageStyle: ImageStyle = {
    height:'75%',
}

const nameStyle: TextStyle = {
    flex:1,
    color: COLORS.primary_light,
    padding:5
}

export const styles = {
    mainContainer,
    imageStyle,
    nameStyle
}