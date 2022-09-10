import {ViewStyle} from 'react-native';

const parentContainer: ViewStyle = {
  backgroundColor: 'green',
  height: 150,
  marginTop: 20,
  marginHorizontal: 25,
};

const productContainer: ViewStyle = {
  backgroundColor: 'red',
  width: 100,
  marginHorizontal: 5,
  justifyContent: 'space-between',
};

export const styles = {
  parentContainer,
  productContainer,
};
