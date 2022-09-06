import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './Greetingsline.styles'

const GreetingLine = () => {
    return(
        <View style={styles.backgroundContainer}>
            <Text style={styles.textStyle}>
                Hi Jalya
            </Text>
        </View>
    )
}

export default GreetingLine