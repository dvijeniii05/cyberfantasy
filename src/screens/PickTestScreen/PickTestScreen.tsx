import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenNames} from '../../../ScreenNames';
import {StackParams, StackProps} from '../../navigation/navigationTypes';
import {styles} from './PickTestScreen.style';

type Props = StackScreenProps<StackParams>;

const PickTestScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.parentConatiner}>
      <View style={styles.headingContaner}>
        <Text style={styles.headingText}>Pick one test</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate(StackScreenNames.MultipleChoiceTest)
          }
        >
          <Text>Multiple choice questions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(StackScreenNames.ProcedureTest)}
        >
          <Text>Go through a procedure</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(StackScreenNames.AiTest)}
        >
          <Text>Analyse by picture using Ai</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PickTestScreen;
