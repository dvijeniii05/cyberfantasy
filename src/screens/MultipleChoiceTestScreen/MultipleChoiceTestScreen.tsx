import React from 'react';
import {
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS} from '../../../COLORS';
import {WIDTH} from '../../constants/dimension';
import {addAnswer} from '../../redux/slices/testsSlice';
import {AppDispatch, RootState} from '../../redux/stores/mainStore';
// import CustomCarousel from 'carousel-with-pagination-rn/CustomCarousel';
// import SlideItem from './SlideItem';

interface AnswerType {
  id: number;
  value: string;
}
interface QuestionType {
  id: number;
  questions: Array<AnswerType>;
}

const dummyQuestions: Array<QuestionType> = [
  {
    id: 0,
    questions: [
      {id: 1, value: 'A'},
      {id: 2, value: 'B'},
      {id: 3, value: 'C'},
      {id: 4, value: 'D'},
    ],
  },
  {
    id: 1,
    questions: [
      {id: 1, value: 'AA'},
      {id: 2, value: 'BB'},
      {id: 3, value: 'CC'},
      {id: 4, value: 'DD'},
    ],
  },
  {
    id: 2,
    questions: [
      {id: 1, value: 'AAA'},
      {id: 2, value: 'BBB'},
      {id: 3, value: 'CCC'},
      {id: 4, value: 'DDD'},
    ],
  },
  {
    id: 3,
    questions: [
      {id: 1, value: 'AAAA'},
      {id: 2, value: 'BBBB'},
      {id: 3, value: 'CCCC'},
      {id: 4, value: 'DDDD'},
    ],
  },
];

// const dummyCarousel = [
//   {
//     id: 1,
//     img: require('../../assets/carouselStuff/image1.jpeg'),
//     title: 'Apple Watch Series 7',
//     description: 'The future of health is on your wrist',
//     price: '$399',
//   },
//   {
//     id: 2,
//     img: require('../../assets/carouselStuff/image2.png'),
//     title: 'AirPods Pro',
//     description: 'Active noise cancellation for immersive sound',
//     price: '$249',
//   },
//   {
//     id: 3,
//     img: require('../../assets/carouselStuff/image3.jpeg'),
//     title: 'AirPods Max',
//     description: 'Effortless AirPods experience',
//     price: '$549',
//   },
// ];

const MultipleChoiceTestScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userAnswers = useSelector(
    (state: RootState) => state.testsReducer.userAnswers
  );

  const renderItem = ({item}: ListRenderItemInfo<QuestionType>) => {
    return (
      <View style={{backgroundColor: 'blue', width: WIDTH, height: 400}}>
        {item.questions.map((answer) => {
          return (
            <TouchableOpacity
              key={answer.id}
              style={{
                width: 200,
                height: 50,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => dispatch(addAnswer(answer.value))}
            >
              <Text>
                {answer.value}+{userAnswers}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          height: 200,
          justifyContent: 'center',
        }}
      >
        <Text>Multiple Choice Test</Text>
      </View>
      <View style={{height: 500}}>
        <FlatList
          data={dummyQuestions}
          renderItem={renderItem}
          contentContainerStyle={{
            backgroundColor: 'red',
          }}
          horizontal
          pagingEnabled
        />
        {/* <CustomCarousel
          data={dummyCarousel}
          renderItem={({item}) => <SlideItem item={item} />}
        /> */}
      </View>
    </View>
  );
};

export default MultipleChoiceTestScreen;
