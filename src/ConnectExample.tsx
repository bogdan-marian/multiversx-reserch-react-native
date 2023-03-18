import React from 'react';
import {Alert, Button, Text, View} from 'react-native';

const showAlert = () =>
  Alert.alert('Alert Title', 'Time to connect with xPortal', [
    {
      text: 'Ask me later',
      onPress: () => console.log('Ask me later pressed'),
    },
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);

const ConnectExample = ({route}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'black'}}>Hello, Connect example!</Text>
      <Button title="Connect with xPortal" onPress={showAlert} />
    </View>
  );
};
export default ConnectExample;
