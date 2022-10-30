import React, {useEffect, useRef, useState} from 'react';
import {Animated, Pressable, StyleProp, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../../COLORS';
import {
  fadingFunction,
  numberChangeFunction,
  stringChangeFunction,
} from '../../animation/AnimationFunction';
import {FontNames} from '../../assets/FontsNames';
import {HomeScreenDefaultWidth} from '../../constants/dimension';
import {styles} from './AnimatedCollapseButton.style';

interface Props {
  text?: string;
  style?: StyleProp<any>;
  // navigation: StackNavigationProp<StackParams>;
  navigation: () => void;
}

const AnimatedCollapseButton = (props: Props) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (!collapsed) {
      fadingFunction(1, fadeAnim);
    } else {
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
      <View style={styles.parentView}>
        {collapsed ? (
          <Pressable
            style={styles.chevronRight}
            onPress={() => setCollapsed(!collapsed)}
          >
            <MaterialIcons
              name="chevron-right"
              size={35}
              color={COLORS.primary_light}
            />
          </Pressable>
        ) : (
          <View style={styles.innerContainer}>
            <TouchableOpacity onPress={props.navigation}>
              <Animated.Text
                style={[
                  styles.textContainer,
                  {color: stringChangeFunction('black', 'white', fadeAnim)},
                ]}
              >
                <Text
                  style={{fontFamily: FontNames.mainFont}}
                >{`Press here `}</Text>
                {props.text}
              </Animated.Text>
            </TouchableOpacity>
            {!collapsed ? (
              <Pressable
                style={styles.chevronLeft}
                onPress={() => setCollapsed(!collapsed)}
              >
                <MaterialIcons
                  name="chevron-left"
                  size={35}
                  color={COLORS.primary}
                />
              </Pressable>
            ) : null}
          </View>
        )}
      </View>
    </Animated.View>
  );
};

export default AnimatedCollapseButton;
