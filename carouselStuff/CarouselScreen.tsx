import React from 'react';
import {View} from 'react-native';
import SlideItem from './SlideItem';
import {CustomCarousel} from 'carousel-with-pagination-rn';

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
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <CustomCarousel
        data={dummyCarousel}
        renderItem={({item}) => <SlideItem item={item} />}
      />
    </View>
  );
};

export default CarouselScreen;
