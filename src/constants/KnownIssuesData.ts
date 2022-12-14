import {useTranslation} from 'react-i18next';

// eslint-disable-next-line react-hooks/rules-of-hooks
const {t} = useTranslation();

export const KnownIssuesData = [
  {
    key: 0,
    text: t('knownType_DrySkin_text'),
    value: 'dry%20skin'
  },
  {
    key: 1,
    text: t('knownType_OilySkin_text'),
    value: 'oily%20skin'
  },
  {
    key: 2,
    text: t('knownType_CombinedSkin_text'),
    value: 'combination%20skin'
  },
  {
    key: 3,
    text: t('knownType_NormalSkin_text'),
    value: 'normal%20skin'
  },
  {
    key: 4,
    text: t('knownType_AgingSkin_text'),
    value: 'anti%20aging'
  },
];
