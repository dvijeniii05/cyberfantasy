import {useTranslation} from 'react-i18next';

// eslint-disable-next-line react-hooks/rules-of-hooks
const {t} = useTranslation();

export const KnownIssuesData = [
  {
    key: 0,
    text: t('knownType_DrySkin_text'),
  },
  {
    key: 1,
    text: t('knownType_OilySkin_text'),
  },
  {
    key: 2,
    text: t('knownType_CombinedSkin_text'),
  },
  {
    key: 3,
    text: t('knownType_NormalSkin_text'),
  },
  {
    key: 4,
    text: t('knownType_AgingSkin_text'),
  },
];
