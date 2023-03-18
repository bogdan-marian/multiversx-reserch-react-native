import React from 'react';
import {Text, View} from 'react-native';

const ProfileScreen = ({ route}) => {
  return (
    <View
      style={{
        
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'black'}}>Hello, ProfileScreen!</Text>
      <Text style={{color: 'black'}}>This is {route.params.name}'s profile</Text>
    </View>
  );
};
export default ProfileScreen;