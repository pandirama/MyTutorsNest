import React, { useMemo } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '@/screens/dashboard/home/HomeScreen';
import ProfileScreen from '@/screens/dashboard/profile/ProfileScreen';
import { palette } from '@/theme/palette';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';
import { fontFamily } from '@/theme/fonts';
import { ROUTES } from './routes';

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
        width: scale(250),
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
};

const styles = StyleSheet.create({
  drawerItemStyle: {
    borderBottomWidth: 1,
    borderRadius: 0,
    justifyContent: 'center',
    borderBottomColor: palette.lightGray,
  },
  drawerLabelStyle: {
    fontFamily: fontFamily.regular,
    fontWeight: '700',
    fontSize: moderateScale(15),
    marginLeft: 0,
  },
  drawerWithOutIconLabel: {
    marginLeft: 0,
  },
  icon: {
    width: scale(20),
    height: verticalScale(20),
    resizeMode: 'contain',
  },
});

export default MainStackNavigator;
