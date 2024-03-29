import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StackScreenNames} from '../../ScreenNames';
import BottomTab from './BottomTab';
import {StackParams} from './navigationTypes';
import KnownTypePick from '../screens/KnownTypePickScreen/KnownTypePickScreen';
import InitialPickScreen from '../screens/InitialPickScreen/InitialPickScreen';
import LandingScreen from '../screens/LandingScreen/LandingScreen';
import ItemInfoScreen from '../screens/ItemInfoScreen/ItemInfoScreen';
import WebViewScreen from '../screens/WebViewScreen/WebViewScreen';
import PickTestScreen from '../screens/PickTestScreen/PickTestScreen';
import MultipleChoiceTestScreen from '../screens/MultipleChoiceTestScreen/MultipleChoiceTestScreen';
import ProcedureTestScreen from '../screens/ProcedureTestScreen/ProcedureTestScreen';
import AiTestScreen from '../screens/AiTestScreen/AiTestScreen';
import CarouselScreen from '../../carouselStuff/CarouselScreen';
import SteamLogin from '../../dota2Api/loginPage';
import SteamModal from '../../dota2Api/steamModal';

const Stack = createStackNavigator<StackParams>();

const AppDrawer = () => {
  const [isAuthed, setIsAuthed] = useState(true);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isAuthed ? (
        <>
          <Stack.Screen
            name={StackScreenNames.Landing}
            component={LandingScreen} // CHNAGE TO LANDING SCREEN
          />
          <Stack.Screen
            name={'SteamModal'}
            component={SteamModal}
            options={{presentation: 'modal'}}
          />
          <Stack.Screen
            name={StackScreenNames.InitialPick}
            component={InitialPickScreen}
          />
          <Stack.Screen
            name={StackScreenNames.KnownTypePick}
            component={KnownTypePick}
          />
          <Stack.Screen
            name={StackScreenNames.PickTest}
            component={PickTestScreen}
          />
          <Stack.Screen
            name={StackScreenNames.MultipleChoiceTest}
            component={MultipleChoiceTestScreen}
          />
          <Stack.Screen
            name={StackScreenNames.ProcedureTest}
            component={ProcedureTestScreen}
          />
          <Stack.Screen
            name={StackScreenNames.AiTest}
            component={AiTestScreen}
          />
          <Stack.Screen
            name={StackScreenNames.BottomTab}
            component={BottomTab}
          />
          <Stack.Screen
            name={StackScreenNames.ItemInfo}
            component={ItemInfoScreen}
            options={{presentation: 'modal'}}
          />
          <Stack.Screen
            name={StackScreenNames.WebView}
            component={WebViewScreen}
            options={{presentation: 'modal'}}
          />
        </>
      ) : (
        <>
          {/* <Stack.Screen
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
            name={StackScreenNames.AdditionalQuestions}
            component={AdditionalQuestions}
          /> */}
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppDrawer;
