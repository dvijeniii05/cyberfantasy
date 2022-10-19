import {Animated} from 'react-native';

export const stringChangeFunction = (
  initColor: string,
  finalColor: string,
  animValue: Animated.Value
) => {
  const newColor = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [initColor, finalColor],
  });
  return newColor;
};

export const numberChangeFunction = (
  initColor: number,
  finalColor: number,
  animValue: Animated.Value
) => {
  const newColor = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [initColor, finalColor],
  });
  return newColor;
};

export const fadingFunction = (x: number, animValue: Animated.Value) => {
  Animated.timing(animValue, {
    toValue: x,
    duration: 500,
    useNativeDriver: false,
  }).start();
};

// export const widthChangeFunction = (
//   initWidth: string,
//   finalWidth: string,
//   animValue: Animated.Value
// ) => {
//   const newWidth = animValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: [initWidth, finalWidth],
//   });
//   return newWidth;
// };
