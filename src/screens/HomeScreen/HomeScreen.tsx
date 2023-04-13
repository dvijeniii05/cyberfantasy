import React from 'react';
import {StatusBar, Text} from 'react-native';
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
import {useGetProductsQuery} from '../../redux/slices/apiSlice';

type NavigationProps = BottomTabScreenProps<TabParams, 'Home'>;

const HomeScreen = ({navigation}: NavigationProps) => {
  const {t} = useTranslation();

  const skinTypes = useSelector(
    (state: RootState) => state.skinTypeReducer.skinType
  );

  const products = useSelector(
    (state: RootState) => state.productsReducer.data
  );
  // const {
  //   data: products,
  //   isLoading,
  //   isSuccess,
  //   isError,
  // } = useGetProductsQuery(skinTypes);

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <StatusBar barStyle={'light-content'} />
      <LoadingComponent
        loadingText={t('loading_indicator_text')}
        // isLoading={isLoading}
      />
      <GreetingLine userName='Jalya' />
      <ForyouCard
        content={t('forYouCard.text')}
        onPress={() => navigation.navigate(TabScreenNames.PersonalCard)}
      />
      {/* {isSuccess ? (
        <>
          <HeaderDivider label='New products' />
          <Products data={products} />
          <HeaderDivider label='Most popular' />
          <Products data={products} />
        </>
      ) : null}
      {isError ? (
        <Text style={{color: 'white'}}>ERROR DURING FETCH</Text>
      ) : null} */}
      <HeaderDivider label='New products' />
      <Products data={products} />
      <HeaderDivider label='Most popular' />
      <Products data={products} />
    </SafeAreaView>
  );
};

export default HomeScreen;
