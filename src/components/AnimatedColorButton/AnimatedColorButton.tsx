import React, {useEffect, useRef, useState} from 'react';
import {Animated, Pressable, StyleProp, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../../COLORS';
import {
  fadingFunction,
  numberChangeFunction,
  stringChangeFunction,
} from '../../animation/AnimationFunction';
import {HomeScreenDefaultWidth} from '../../constants/dimension';
import {styles} from './AnimatedColorButton.styles';

interface Props {
  text: string;
  style?: StyleProp<any>;
}

const AnimatedColor = (props: Props) => {
  // const [showIcon, setShowIcon] = useState<boolean>(false);
  const [pressed, setPressed] = useState<boolean>(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (pressed) {
      // setShowIcon(true);
      fadingFunction(1, fadeAnim);
    } else {
      // setShowIcon(false);
      fadingFunction(0, fadeAnim);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pressed]);

  return (
    <Animated.View
      style={[
        styles.pressableStyle,
        props.style,
        {
          backgroundColor: stringChangeFunction(
            COLORS.primary,
            COLORS.secondary,
            fadeAnim
          ),
        },
        {
          width: numberChangeFunction(
            HomeScreenDefaultWidth * 0.8,
            HomeScreenDefaultWidth,
            fadeAnim
          ),
        },
      ]}
    >
      <Pressable
        style={styles.parentContainer}
        onPress={() => setPressed(!pressed)}
      >
        <View style={styles.innerContainer}>
          <Animated.Text
            style={[
              styles.textContainer,
              {color: stringChangeFunction('black', 'white', fadeAnim)},
            ]}
          >
            {props.text}
          </Animated.Text>
          {pressed ? (
            <View style={styles.iconContainer}>
              <MaterialIcons name="check" size={30} color={COLORS.primary} />
            </View>
          ) : null}
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default AnimatedColor;
