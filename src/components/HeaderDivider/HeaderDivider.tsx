import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './HeaderDivider.style';

interface Props {
  label: string;
  viewAll?: boolean;
}

const HeaderDivider: React.FC<Props> = ({viewAll = true, ...props}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.parentContainer}>
      <Text style={styles.leftTextStyle}>{props.label}</Text>
      {viewAll && (
        <TouchableOpacity style={styles.viewAllButton} onPress={() => {}}>
          <Text style={styles.rightTextStyle}>{t('viewAll.text')}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HeaderDivider;
