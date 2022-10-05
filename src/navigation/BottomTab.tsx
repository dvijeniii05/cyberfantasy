import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabScreenNames} from '../../ScreenNames';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import {TabParams} from './navigationTypes';
import BrowseScreen from '../screens/BrowseScreen/BrowseScreen';
import AccountScreen from '../screens/AccountScreen/AccountScreen';
import PersonalCardScreen from '../screens/PersonalCard/PersonalCardScreen';
import {styles} from './BottomTab.style';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator<TabParams>();

const BottomTab = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.screenOption,
          tabBarShowLabel: false,
          tabBarIconStyle: {
            backgroundColor: 'black',
          },
        }}
      >
        <Tab.Screen
          name={TabScreenNames.Home}
          component={HomeScreen}
          options={{
            tabBarIcon: () => <AntDesign name="home" size={25} />,
          }}
        />
        <Tab.Screen name={TabScreenNames.Account} component={AccountScreen} />
        <Tab.Screen name={TabScreenNames.Browse} component={BrowseScreen} />
        <Tab.Screen
          name={TabScreenNames.PersonalCard}
          component={PersonalCardScreen}
          options={{tabBarItemStyle: {display: 'none'}}}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTab;
