import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import {FontNames} from '../../assets/FontsNames';
import {styles} from './ExplanationCard.style';

const ExplanationCard = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.parentContainer}>
      <Text style={styles.textStyle}>
        {t('explanationCard.text')}
        <Text style={{fontFamily: FontNames.mainFont}}>{` Jalya`}</Text>
      </Text>
    </View>
  );
};

export default ExplanationCard;
