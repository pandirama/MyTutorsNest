import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/login/LoginScreen';
import SignupScreen from '../screens/auth/register/RegisterScreen';

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator: React.FC = memo(() => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="LOGIN" component={LoginScreen} />
      <AuthStack.Screen name="SIGNUP" component={SignupScreen} />
    </AuthStack.Navigator>
  );
});

const AppStack = createNativeStackNavigator();

const AppStackScreen: React.FC = memo(() => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="AUTH"
        component={AuthStackNavigator}
      />
    </AppStack.Navigator>
  );
});

const RootNavigators: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStackScreen />
    </NavigationContainer>
  );
};

export default RootNavigators;
