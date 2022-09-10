import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackScreenNames} from '../../ScreenNames';
import BottomTab from './BottomTab';
import {StackParams} from './navigationTypes';

const Stack = createNativeStackNavigator<StackParams>();

const AppDrawer = () => {
  const [isAuthed, setIsAuthed] = useState(true);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isAuthed ? (
        <Stack.Screen name={StackScreenNames.BottomTab} component={BottomTab} />
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
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppDrawer;
