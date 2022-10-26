import React, {useEffect, useRef, useState} from 'react';
import {Animated, Pressable, StyleProp, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../../COLORS';
import {
  fadingFunction,
  numberChangeFunction,
  stringChangeFunction,
} from '../../animation/AnimationFunction';
import {HomeScreenDefaultWidth} from '../../constants/dimension';
import {styles} from './AnimatedCollapseButton.style';

interface Props {
  text?: string;
  style?: StyleProp<any>;
}

const AnimatedCollapseButton = (props: Props) => {
  // const [showIcon, setShowIcon] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (!collapsed) {
      // setShowIcon(true);
      fadingFunction(1, fadeAnim);
    } else {
      // setShowIcon(false);
      fadingFunction(0, fadeAnim);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapsed]);

  return (
    <Animated.View
      style={[
        styles.parentContainer,
        props.style,
        {
          backgroundColor: stringChangeFunction(
            COLORS.secondary,
            COLORS.secondary,
            fadeAnim
          ),
        },
        {
          width: numberChangeFunction(
            HomeScreenDefaultWidth * 0.15,
            HomeScreenDefaultWidth,
            fadeAnim
          ),
        },
        {
          opacity: numberChangeFunction(1, 0.8, fadeAnim),
        },
      ]}
    >
      {/* TODO: make parent view not pressable, and icons into pressables + touchalbe for text? */}
      <Pressable
        style={styles.pressableStyle}
        onPress={() => setCollapsed(!collapsed)}
      >
        {collapsed ? (
          <View style={styles.chevronRight}>
            <MaterialIcons
              name="chevron-right"
              size={35}
              color={COLORS.primary_light}
            />
          </View>
        ) : (
          <View style={styles.innerContainer}>
            <TouchableOpacity>
              <Animated.Text
                style={[
                  styles.textContainer,
                  {color: stringChangeFunction('black', 'white', fadeAnim)},
                ]}
              >
                {props.text}
              </Animated.Text>
            </TouchableOpacity>
            {!collapsed ? (
              <View style={styles.chevronLeft}>
                <MaterialIcons
                  name="chevron-left"
                  size={35}
                  color={COLORS.primary}
                />
              </View>
            ) : null}
          </View>
        )}
      </Pressable>
    </Animated.View>
  );
};

export default AnimatedCollapseButton;
