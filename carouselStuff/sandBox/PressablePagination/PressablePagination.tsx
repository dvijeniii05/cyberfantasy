import React from 'react';
import {TouchableOpacity, View, Animated} from 'react-native';
import {PressablePaginationProps} from '../Interfaces';
import {styles} from './PressablePagination.styles';

const PressablePagination = (props: PressablePaginationProps) => {
  return (
    <>
      <View style={styles.parentContainer}>
        {props.data.map((_, idx) => {
          const inputRange = [
            (idx - 1) * props.itemWidth,
            idx * props.itemWidth,
            (idx + 1) * props.itemWidth,
          ];
          const dotWidthAndHeight = props.scrollX.interpolate({
            inputRange,
            outputRange: [30, 50, 30],
            extrapolate: 'clamp',
          });
          const backgroundColor = props.scrollX.interpolate({
            inputRange,
            outputRange: ['yellow', 'red', 'yellow'],
            extrapolate: 'clamp',
          });
          return (
            <TouchableOpacity
              key={idx}
              testID={`pagination-indicator-${idx}`}
              onPress={() => props.getIndex(idx)}
              style={styles.buttonContainer}
            >
              <Animated.View
                key={idx.toString()}
                style={styles.buttonStyle(dotWidthAndHeight, backgroundColor)}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

export default PressablePagination;
