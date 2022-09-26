import {TextStyle, ViewStyle} from 'react-native';

const productContainer: ViewStyle = {
  backgroundColor: 'red',
  width: 100,
  height: '100%',
  marginHorizontal: 5,
  justifyContent: 'space-between',
  borderRadius: 10,
  paddingHorizontal:4
};

const descriptionStyle: TextStyle = {
  fontSize: 14,
  flexShrink:1
};

export const styles = {
  productContainer,
  descriptionStyle,
};
