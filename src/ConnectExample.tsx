import React from 'react';
import {Alert, Button, Text, View} from 'react-native';
import AuthClient from "@walletconnect/auth-client";



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

  const authClient = await AuthClient.init({
    projectId: "<YOUR_PROJECT_ID>",
    metadata: {
      name: "my-auth-dapp",
      description: "A dapp using WalletConnect AuthClient",
      url: "my-auth-dapp.com",
      icons: ["https://my-auth-dapp.com/icons/logo.png"],
    },
  });

  const initAuthClient = () => {
    authClient.on("auth_response", ({ params }) => {
      if (Boolean(params.result?.s)) {
        // Response contained a valid signature -> user is authenticated.
      } else {
        // Handle error or invalid signature case
        console.error(params.message);
      }
    });
  }

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
