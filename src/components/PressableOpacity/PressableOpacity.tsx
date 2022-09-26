import React, {useRef} from 'react';
import {Animated, Easing, Pressable, ViewStyle} from 'react-native';

interface Props {
  style: ViewStyle;
  onPress: () => void;
  text?: string;
  children?: React.ReactNode;
  testID?: string;
}

const PressableOpacity = (props: Props) => {
  const opacityAnimation = useRef(new Animated.Value(1)).current;
  const changeOpacity = (value: number, duration: number) => {
    Animated.timing(opacityAnimation, {
      toValue: value,
      duration: duration,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{opacity: opacityAnimation, flex: 1}}>
      <Pressable
        // style={({pressed}) => [{opacity: pressed ? 0.5 : 1.0}, props.style]}
        style={props.style}
        onPress={() => changeOpacity(0.5, 50)}
        testID={props.testID}
      >
        {props.children}
      </Pressable>
    </Animated.View>
  );
};

export default PressableOpacity;
