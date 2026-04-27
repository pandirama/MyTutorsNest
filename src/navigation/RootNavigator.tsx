import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStackNavigator from './AuthNavigator';
import MainStackNavigator from './MainNavigator';
import { useSelector } from 'react-redux';

const AppStack = createNativeStackNavigator();

const AppStackScreen: React.FC = memo(() => {
  const { isAuthenticated } = useSelector(
    (state: any) => state.user.isAuthenticated,
  );
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <AppStack.Screen name="DASH_BOARD" component={MainStackNavigator} />
      ) : (
        <AppStack.Screen name="AUTH" component={AuthStackNavigator} />
      )}
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
