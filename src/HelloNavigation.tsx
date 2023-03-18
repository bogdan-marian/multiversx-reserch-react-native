import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import ConnectExample from './ConnectExample';

const Stack = createNativeStackNavigator();

const HelloNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ConnectExample" component={ConnectExample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default HelloNavigation;
