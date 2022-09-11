import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './Greetingsline.styles';

interface Props {
  userName: string;
}

const GreetingLine = (props: Props) => {
  return (
    <View style={styles.backgroundContainer}>
      <Text style={styles.textStyle}>Welcome back {props.userName}</Text>
    </View>
  );
};

export default GreetingLine;
