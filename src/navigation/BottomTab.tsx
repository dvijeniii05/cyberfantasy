import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabScreenNames } from '../../ScreenNames';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { TabParams } from './navigationTypes';
import BrowseScreen from '../screens/BrowseScreen/BrowseScreen';
import AccountScreen from '../screens/AccountScreen/AccountScreen';

const Tab = createBottomTabNavigator<TabParams>()

const BottomTab = () => {
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name={TabScreenNames.Home} component={HomeScreen}/>
            <Tab.Screen name={TabScreenNames.Account} component={AccountScreen}/>
            <Tab.Screen name={TabScreenNames.Browse} component={BrowseScreen}/>
        </Tab.Navigator>
    )
}

export default BottomTab