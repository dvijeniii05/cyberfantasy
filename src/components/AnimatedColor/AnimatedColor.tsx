import React, {useEffect, useRef} from 'react';
import {Animated, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../../COLORS';
import {styles} from './AnimatedColor.styles';

interface Props {
  pressed: boolean;
  text: string;
  //   children: React.ReactNode;
}

const AnimatedColor = (props: Props) => {
  useEffect(() => {
    if (props.pressed) {
      startFading(1);
    } else {
      startFading(0);
    }
  }, [props.pressed]);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const startFading = (x: number) => {
    Animated.timing(fadeAnim, {
      toValue: x,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  const animFunc = (initColor: string, finalColor: string) => {
    const newColor = fadeAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [initColor, finalColor],
    });
    return newColor;
  };

  return (
    <Animated.View
      style={[
        styles.parentContainer,
        {
          backgroundColor: animFunc(COLORS.primary, COLORS.secondary),
        },
      ]}
    >
      <View style={styles.innerContainer}>
        <Animated.Text
          style={[styles.textContainer, {color: animFunc('black', 'white')}]}
        >
          {props.text}
        </Animated.Text>
        <View style={styles.iconContainer}>
          <MaterialIcons name="check" size={30} color={COLORS.primary} />
        </View>
      </View>
    </Animated.View>
  );
};

export default AnimatedColor;
