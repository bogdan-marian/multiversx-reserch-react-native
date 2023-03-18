import React from 'react';
import {Button, Text, View} from 'react-native';

const HomeScreen = ({ navigation }) =>{
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'black'}}>Hello, Home!</Text>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Profile', { name: 'Jane' })} />
    </View>
  );
}
export default HomeScreen;