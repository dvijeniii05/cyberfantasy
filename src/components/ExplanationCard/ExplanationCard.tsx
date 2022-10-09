import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import {styles} from './ExplanationCats.style';

const ExplanationCard = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.parentContainer}>
      <Text style={styles.textStyle}>{t('explanationCard.text')}</Text>
    </View>
  );
};

export default ExplanationCard;
