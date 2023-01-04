import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {COLORS} from '../../COLORS';
export const starsCalculator = (rating?: string): number => {
  let count = 0;

  switch (rating) {
    case 'rating5':
      count = 5;
      break;
    case 'rating4_5':
      count = 4;
      break;
    case 'rating4':
      count = 4;
      break;
    case 'rating3_4':
      count = 3;
      break;
    case 'rating3':
      count = 3;
      break;
    case 'rating2_3':
      count = 2;
      break;
    case 'rating2':
      count = 2;
      break;
    case 'rating1_2':
      count = 1;
      break;
    case 'rating1':
      count = 1;
      break;
    case 'rating0_1':
      count = 0;
      break;
    case 'rating0':
      count = 0;
      break;
    default:
      count = 0;
      break;
  }
  return count;
};

export const stars = (starsCount: number) => {
  let count = [];
  for (let i = 0; i <= starsCount; i++) {
    const zeroStars = starsCount === 0 ? 5 : 0;
    if (starsCount === i || zeroStars !== 0) {
      let greyStars = 5 - starsCount;
      for (let x = 0; x < greyStars; x++) {
        count.push(
          <AntDesign
            name='star'
            size={24}
            key={x + 5}
            color={COLORS.secondary_light}
          />
        );
      }
    } else {
      count.push(
        <AntDesign name='star' size={24} key={i} color={COLORS.primary} />
      );
    }
  }
  return count;
};
