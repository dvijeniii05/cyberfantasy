import React, {useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  MultipleChoiceQuestionsData,
  QuestionType,
} from '../../constants/MultipleChoiceQuestionsData';
import {addAnswer} from '../../redux/slices/testsSlice';
import {AppDispatch, RootState} from '../../redux/stores/mainStore';
import {calculateSkinType} from '../../utils/testResultsCalculator';
import {styles} from './MultipleChoiceTest.style';

const MultipleChoiceTest = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userAnswers = useSelector(
    (state: RootState) => state.testsReducer.userAnswers
  );
  const listRef = useRef<FlatList>(null);

  const scrollIfNotLast = (itemId: number) => {
    if (itemId === MultipleChoiceQuestionsData.length - 1) {
      console.log('test complete');
      //Trigger test results calculation
      calculateSkinType(userAnswers);
    } else {
      listRef.current?.scrollToIndex({index: itemId + 1});
    }
  };

  const renderItem = ({item}: ListRenderItemInfo<QuestionType>) => {
    return (
      <View style={styles.renderParentContainer}>
        <Text>{item.question}</Text>
        {item.answers.map((answer) => {
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
      data={MultipleChoiceQuestionsData}
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
