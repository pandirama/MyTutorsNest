import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/dashBoard/Home';
import ProfileScreen from '../screens/dashBoard/Profile';

const MainStack = createNativeStackNavigator();

const MainStackNavigator: React.FC = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="HOME" component={HomeScreen} />
      <MainStack.Screen name="PROFILE" component={ProfileScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
