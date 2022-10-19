import React, {useState} from 'react';
import {Pressable, StyleProp} from 'react-native';
import AnimatedColor from '../AnimatedColorButton/AnimatedColorButton';
import {styles} from './PickTypeCard.style';

interface Props {
  text: string;
  style?: StyleProp<any>;
}

const PickTypeCard = (props: Props) => {
  const [pressed, setPresssed] = useState<boolean>(false);
  return (
    <Pressable
      style={[styles.parentContainer, props.style]}
      onPress={() => setPresssed(!pressed)}
    >
      <AnimatedColor pressed={pressed} text={props.text} />
    </Pressable>
  );
};

export default PickTypeCard;
