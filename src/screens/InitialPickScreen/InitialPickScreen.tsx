import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {ImageBackground} from 'react-native';
import {StackScreenNames} from '../../../ScreenNames';
import AnimatedCollapseButton from '../../components/AnimatedCollapseButton/AnimatedCollapseButton';
import {StackParams} from '../../navigation/navigationTypes';
import {styles} from './InitialPickScreen.style';

type Props = StackScreenProps<StackParams>;

const InitialPickScreen = ({navigation}: Props) => {
  const {t} = useTranslation();
  return (
    <ImageBackground
      style={styles.parentContainer}
      source={require('../../assets/pick1.jpg')}
    >
      <AnimatedCollapseButton
        text={t('initialPick_KnownIsssues_button_text')}
        navigation={() => navigation.navigate(StackScreenNames.KnownTypePick)}
      />
      <AnimatedCollapseButton
        text={t('initialPick_ProceedToTest_button_text')}
      />
    </ImageBackground>
  );
};

export default InitialPickScreen;
