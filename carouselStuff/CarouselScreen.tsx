import React from 'react';
import {View} from 'react-native';
import SlideItem from './SlideItem';
import CustomCarousel from './sandBox/CustomCarousel';
import {SafeAreaView} from 'react-native-safe-area-context';

const dummyCarousel = [
  {
    id: 1,
    img: require('./image1.jpeg'),
    title: 'Apple Watch Series 7',
    description: 'The future of health is on your wrist',
    price: '$399',
  },
  {
    id: 2,
    img: require('./image2.png'),
    title: 'AirPods Pro',
    description: 'Active noise cancellation for immersive sound',
    price: '$249',
  },
  {
    id: 3,
    img: require('./image3.jpeg'),
    title: 'AirPods Max',
    description: 'Effortless AirPods experience',
    price: '$549',
  },
];

const CarouselScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }}
      >
        <CustomCarousel
          data={dummyCarousel}
          renderItem={({item}) => <SlideItem item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default CarouselScreen;
