import React from 'react';
import {Alert, Button, Text, View} from 'react-native';
import AuthClient from '@walletconnect/auth-client';
import {WalletConnectLoginButton} from '@multiversx/sdk-dapp/UI';

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

const initAuthClient = async () => {
  try {
    console.log('Init auth');
    const authClient = await AuthClient.init({
      projectId: '3eed50c3b154388063a0920505f8322a',
      metadata: {
        name: 'my-auth-dapp',
        description: 'A dapp using WalletConnect AuthClient',
        url: '#',
        icons: ['https://my-auth-dapp.com/icons/logo.png'],
      },
    });

    console.log('End auth');
  } catch (error) {
    console.log('Huston we have an error', error);
  }
};

const ConnectWalletConnectExample = ({route}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'black'}}>
        Hello, WithMultiversXConnectProvider!
      </Text>
      <Button title="Connect with xPortal" onPress={showAlert} />
      {/* <WalletConnectLoginButton
        callbackRoute="/"
        loginButtonText={'xPortal App'}
        isWalletConnectV2={true}
        className="btn btn-sm dapp-primary font-size-sm w-60"
      /> */}
    </View>
  );
};
export default ConnectWalletConnectExample;
