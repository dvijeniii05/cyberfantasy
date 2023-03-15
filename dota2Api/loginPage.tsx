import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackProps} from '../src/navigation/navigationTypes';

const SteamLogin = () => {
  const navigation = useNavigation<StackProps>();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={{height: 500, justifyContent: 'space-around'}}>
        <Text>Steam Login</Text>
        <TextInput />
        <TouchableOpacity onPress={() => navigation.navigate('SteamModal')}>
          <Text>Link Steam</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SteamLogin;
