import { TextStyle, ViewStyle } from "react-native";

const parentContainer: ViewStyle = {
    
    width: '100%',
    height: '100%',
}

const innerContainer: ViewStyle = {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
}

const textContainer: TextStyle = {
    width: '80%',
    fontSize: 16
}

const iconContainer: ViewStyle = {
    height:'100%',
    width:'10%',
    justifyContent:'center'
}

export const styles = {
    innerContainer,
    parentContainer,
    iconContainer,
    textContainer
}