import React from 'react'
import { TextStyle, ViewStyle } from 'react-native'
import { COLORS } from '../../../COLORS'

const backgroundContainer : ViewStyle = {
    backgroundColor: COLORS.white,
    width:'100%',
    alignItems:'center'
}

const textStyle : TextStyle = {
    fontSize:16
}

export const styles = {
    backgroundContainer,
    textStyle
}