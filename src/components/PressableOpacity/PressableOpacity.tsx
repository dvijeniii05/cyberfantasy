import React from 'react';
import {Pressable, ViewStyle} from 'react-native';

interface Props {
  style: ViewStyle;
  onPress: () => void;
  text?: string;
  children?: React.ReactNode;
}

const PressableOpacity = (props: Props) => {
  return (
    <Pressable
      style={({pressed}) => [{opacity: pressed ? 0.5 : 1.0}, props.style]}
      onPress={props.onPress}
    >
      {props.children}
    </Pressable>
  );
};

export default PressableOpacity;
