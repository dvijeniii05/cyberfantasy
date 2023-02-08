import {
    ViewStyle
} from 'react-native'
import { COLORS } from '../../../COLORS'

const parentConatiner:ViewStyle = {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
}

const headingContaner:ViewStyle = {
    height:200,
    justifyContent:'center'
}

const testContainer:ViewStyle = {
    height:500
}

export const styles = {
    parentConatiner,
    headingContaner,
    testContainer
}