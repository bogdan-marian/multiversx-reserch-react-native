import React from 'react';
import {Text, View} from 'react-native';
import HelloNavigation from './HelloNavigation';

import WalletConnectProvider from "@walletconnect/react-native-dapp";
import AsyncStorage from "@react-native-async-storage/async-storage";


const HelloConnect = () => {
  return (<WalletConnectProvider
    redirectUrl={
      Platform.OS === "web" ? window.location.origin : "AwesomeProject://"
    }
    storageOptions={{
      asyncStorage: AsyncStorage,
    }}
  >
    <HelloNavigation/>
  </WalletConnectProvider>);
};
export default HelloConnect;
