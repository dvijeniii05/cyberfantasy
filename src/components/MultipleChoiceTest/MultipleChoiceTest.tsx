import React, {useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addAnswer} from '../../redux/slices/testsSlice';
import {AppDispatch, RootState} from '../../redux/stores/mainStore';
import {styles} from './MultipleChoiceTest.style';

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

const MultipleChoiceTest = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userAnswers = useSelector(
    (state: RootState) => state.testsReducer.userAnswers
  );
  const listRef = useRef<FlatList>(null);

  const scrollIfNotLast = (itemId: number) => {
    if (itemId === dummyQuestions.length - 1) {
      console.log('test complete');
    } else {
      listRef.current?.scrollToIndex({index: itemId + 1});
    }
  };

  const renderItem = ({item}: ListRenderItemInfo<QuestionType>) => {
    return (
      <View style={styles.renderParentContainer}>
        {item.questions.map((answer) => {
          return (
            <TouchableOpacity
              key={answer.id}
              style={styles.renderButton}
              onPress={() => {
                dispatch(addAnswer(answer.value));
                scrollIfNotLast(item.id);
              }}
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
    <FlatList
      ref={listRef}
      data={dummyQuestions}
      renderItem={renderItem}
      contentContainerStyle={{
        backgroundColor: 'red',
      }}
      horizontal
      pagingEnabled
      scrollEnabled={false}
    />
  );
};

export default MultipleChoiceTest;
