import { ViewStyle } from "react-native";
import { WIDTH } from "../../constants/dimension";

const renderParentContainer:ViewStyle = {
    backgroundColor:'blue',
    width:WIDTH,
    height: 400,
    justifyContent:'space-evenly',
    alignItems:'center'
}

const renderButton: ViewStyle = {
    width: 200,
    height: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
}

export const styles = {
    renderParentContainer,
    renderButton
}