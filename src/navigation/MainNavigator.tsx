// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useMemo } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '@/screens/dashboard/home/HomeScreen';
import ProfileScreen from '@/screens/dashboard/profile/ProfileScreen';
import { palette } from '@/theme/palette';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { moderateScale } from 'react-native-size-matters';
import {  StyleSheet } from 'react-native';
import { fontFamily } from '@/theme/fonts';
import { ROUTES } from './routes';

// const MainStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator<any>();

const getIconRenderer =
  (name: string) =>
  ({ color, size }: any) =>
    (
      <Ionicons
        name={name}
        size={size ?? moderateScale(20)}
        color={color ?? palette.black}
      />
    );

const MainStackNavigator: React.FC = () => {
  const screens = useMemo<any[]>(
    () => [
      {
        name: ROUTES.HOME,
        component: HomeScreen,
        label: 'Home',
        iconName: 'home-outline',
      },
      {
        name: ROUTES.PROFILE,
        component: ProfileScreen,
        label: 'Profile',
        iconName: 'person-outline',
      },
    ],
    [],
  );

  const drawerScreenOptions = useMemo(
    () => ({
      headerShown: false,
      drawerActiveTintColor: palette.black,
      drawerInactiveTintColor: palette.black,
      drawerActiveBackgroundColor: palette.white,
      drawerStyle: {
        width: moderateScale(300),
      },
    }),
    [],
  );

  return (
    <Drawer.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={drawerScreenOptions}
    >
      {screens.map(s => (
        <Drawer.Screen
          key={s.name}
          name={s.name}
          component={s.component}
          options={{
            drawerLabel: s.label,
            drawerItemStyle: styles.drawerItemStyle,
            drawerLabelStyle: s.iconName
              ? styles.drawerLabelStyle
              : [styles.drawerLabelStyle, styles.drawerWithOutIconLabel],
            drawerIcon: s.iconName ? getIconRenderer(s.iconName) : undefined,
          }}
        />
      ))}
    </Drawer.Navigator>
  );

  // return (
  //   <MainStack.Navigator screenOptions={{ headerShown: false }}>
  //     <MainStack.Screen name="HOME" component={HomeScreen} />
  //     <MainStack.Screen name="PROFILE" component={ProfileScreen} />
  //   </MainStack.Navigator>
  // );
};

const styles = StyleSheet.create({
  drawerItemStyle: {
    borderBottomWidth: 1,
    borderRadius: 0,
    justifyContent: 'center',
  },
  drawerLabelStyle: {
    fontFamily: fontFamily.bold,
    fontWeight: '700',
    fontSize: moderateScale(15),
    marginLeft: 0,
  },
  drawerWithOutIconLabel: {
    marginLeft: 0,
  },
  icon: {
    width: moderateScale(20),
    height: moderateScale(20),
    resizeMode: 'contain',
  },
  fontStyle: {
    fontFamily: fontFamily.bold,
    fontWeight: '700',
    fontSize: moderateScale(15),
  },
});

export default MainStackNavigator;
