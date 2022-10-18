import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, Pressable} from 'react-native';
import AnimatedColor from '../AnimatedColor/AnimatedColor';
import {styles} from './PickTypeCard.style';

interface Props {
  text: string;
}

const PickTypeCard = (props: Props) => {
  const [pressed, setPresssed] = useState<boolean>(false);
  return (
    <Pressable
      style={styles.parentContainer}
      onPress={() => setPresssed(!pressed)}
    >
      <AnimatedColor pressed={pressed} text={props.text} />
    </Pressable>
  );
};

export default PickTypeCard;
