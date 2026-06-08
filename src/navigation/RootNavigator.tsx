import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStackNavigator from './AuthNavigator';
import MainStackNavigator from './MainNavigator';
// import { useSelector } from 'react-redux';
import { navigationRef } from './navigationService';
import { ROUTES } from './routes';

const AppStack = createNativeStackNavigator();

const AppStackScreen: React.FC = () => {
  // const isAuthenticated = useSelector(
  //   (state: any) => state.user.isAuthenticated,
  // );
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      {/* {isAuthenticated ? (
        <AppStack.Screen name="MAIN" component={MainStackNavigator} />
      ) : (
        <AppStack.Screen name="AUTH" component={AuthStackNavigator} />
      )} */}
      <AppStack.Screen name={ROUTES.AUTH} component={AuthStackNavigator} />
      <AppStack.Screen name={ROUTES.MAIN} component={MainStackNavigator} />
    </AppStack.Navigator>
  );
};

const RootNavigators: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppStackScreen />
    </NavigationContainer>
  );
};

export default RootNavigators;
