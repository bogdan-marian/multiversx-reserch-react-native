import React from 'react';
import {Button, Text, View} from 'react-native';

const HomeScreen = ({navigation}) => {
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
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
      />
      <Button
        title="Connect Example"
        onPress={() => navigation.navigate('ConnectExample')}
      />
       <Button
        title="WithMultiversXConnectProvider"
        onPress={() => navigation.navigate('WithMultiversXConnectProvider')}
      />
    </View>
  );
};
export default HomeScreen;
