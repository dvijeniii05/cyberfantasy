import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ForyouCard from '../../components/ForyouCard/ForyouCard';
import GreetingLine from '../../components/GreetingsLine/Greetingsline';
import Products from '../../components/Products/Products';
import {styles} from './HomeScreen.styles';
import {useTranslation} from 'react-i18next';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {TabParams} from '../../navigation/navigationTypes';
import HeaderDivider from '../../components/HeaderDivider/HeaderDivider';
import {TabScreenNames} from '../../../ScreenNames';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/stores/mainStore';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';

type NavigationProps = BottomTabScreenProps<TabParams, 'Home'>;

const HomeScreen = ({navigation}: NavigationProps) => {
  const {t} = useTranslation();
  const products = useSelector(
    (state: RootState) => state.productsReducer.data
  );
  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <StatusBar barStyle={'light-content'} />
      <LoadingComponent loadingText={t('loading_indicator_text')} />

      <GreetingLine userName='Jalya' />
      <ForyouCard
        content={t('forYouCard.text')}
        onPress={() => navigation.navigate(TabScreenNames.PersonalCard)}
      />
      <HeaderDivider label='New products' />
      <Products data={products} />
      <HeaderDivider label='Most popular' />
      <Products data={products} />
    </SafeAreaView>
  );
};

export default HomeScreen;
