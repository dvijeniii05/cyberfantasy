import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StackScreenNames} from '../../ScreenNames';
import BottomTab from './BottomTab';
import {StackParams} from './navigationTypes';
import KnownTypePick from '../screens/KnownTypePickScreen/KnownTypePickScreen';
import InitialPickScreen from '../screens/InitialPickScreen/InitialPickScreen';

const Stack = createStackNavigator<StackParams>();

const AppDrawer = () => {
  const [isAuthed, setIsAuthed] = useState(true);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isAuthed ? (
        <Stack.Screen
          name={StackScreenNames.BottomTab}
          component={InitialPickScreen}
        />
      ) : (
        <>
          <Stack.Screen
            name={StackScreenNames.AuthScreen}
            component={AuthScreen}
          />
          <Stack.Screen
            name={StackScreenNames.SignUp}
            component={SignUpScreen}
          />
          <Stack.Screen
            name={StackScreenNames.SignIn}
            component={SignInScreen}
          />
          <Stack.Screen
            name={StackScreenNames.Questionnaire}
            component={QuestionnaireScreen}
          />
          <Stack.Screen
            name={StackScreenNames.KnownTypePick}
            component={KnownTypePick}
          />
          <Stack.Screen
            name={StackScreenNames.AdditionalQuestions}
            component={AdditionalQuestions}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppDrawer;
