import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabScreenNames} from '../../ScreenNames';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import {TabParams} from './navigationTypes';
import BrowseScreen from '../screens/BrowseScreen/BrowseScreen';
import AccountScreen from '../screens/AccountScreen/AccountScreen';
import PersonalCardScreen from '../screens/PersonalCardScreen/PersonalCardScreen';
import {styles} from './BottomTab.style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Text, View} from 'react-native';
import {COLORS} from '../../COLORS';

const Tab = createBottomTabNavigator<TabParams>();

const BottomTab = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.screenOption,
          tabBarShowLabel: false,
          tabBarActiveTintColor: COLORS.primary,
        }}
        initialRouteName={TabScreenNames.Home}
      >
        <Tab.Screen
          name={TabScreenNames.Account}
          component={AccountScreen}
          options={{
            tabBarIcon: ({color}) => (
              <View style={styles.iconStyle}>
                <AntDesign name='staro' size={30} color={color} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name={TabScreenNames.Home}
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) => (
              <View style={styles.iconStyle}>
                <Text style={styles.homeIconStyle(color)}>HOME</Text>
              </View>
            ),
            // tabBarLabelStyle: {}
          }}
        />
        <Tab.Screen
          name={TabScreenNames.PersonalCard}
          component={PersonalCardScreen}
          options={{
            tabBarIcon: ({color}) => (
              <View style={styles.iconStyle}>
                <AntDesign name='bulb1' size={30} color={color} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name={TabScreenNames.Browse}
          component={BrowseScreen}
          options={{tabBarItemStyle: {display: 'none'}}}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTab;
