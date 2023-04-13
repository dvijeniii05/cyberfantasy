import React from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {COLORS} from '../../../COLORS';
import {RootState} from '../../redux/stores/mainStore';
import {styles} from './LoadingComponent.style';

interface Props {
  loadingText: string;
  isLoading?: boolean;
}

const LoadingComponent = (props: Props) => {
  const products = useSelector((state: RootState) => state.productsReducer);

  return (
    <>
      {props.isLoading && (
        <View style={styles.parentContainer}>
          <View style={styles.indicatorContainer}>
            <ActivityIndicator size={'large'} color={COLORS.primary} />
            <Text style={styles.textContainer}>{props.loadingText}</Text>
          </View>
        </View>
      )}
      {products.status === 'pending' && (
        <View style={styles.parentContainer}>
          <View style={styles.indicatorContainer}>
            <ActivityIndicator size={'large'} color={COLORS.primary} />
            <Text style={styles.textContainer}>{props.loadingText}</Text>
          </View>
        </View>
      )}
    </>
  );
};

export default LoadingComponent;
