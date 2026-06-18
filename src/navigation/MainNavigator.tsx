import React, { useMemo } from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import ProfileScreen from '@/screens/dashboard/profile/ProfileScreen';
import { palette } from '@/theme/palette';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { moderateScale, scale } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';
import { fontFamily } from '@/theme/fonts';
import { ROUTES } from './routes';
import CustomDrawer from './CustomDrawer';
import DashboardBottomNavigator from './DashboardBottomNavigator';
import { DRAWER } from '@/utils/constants';
import MainHeader from '@/components/MainHeader';

const Drawer = createDrawerNavigator<any>();

const renderDrawerContent = (props: DrawerContentComponentProps) => (
  <CustomDrawer {...props} />
);

const renderHeader = ({ navigation, route, options }: any) => (
  <MainHeader
    title={options?.title ?? route?.name}
    navigation={navigation}
  />
);

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
        component: DashboardBottomNavigator,
        label: DRAWER.HOME_LABEL,
        iconName: 'home-outline',
        // The bottom navigator renders its own per-tab MainHeader.
        ownHeader: true,
      },
      {
        name: ROUTES.FEEDBACK,
        component: ProfileScreen,
        label: DRAWER.FEEDBACK_LABEL,
      },
      {
        name: ROUTES.PRIVACY_POLICY,
        component: ProfileScreen,
        label: DRAWER.PRIVACY_POLICY_LABEL,
      },
      {
        name: ROUTES.TERMS_CONDITIONS,
        component: ProfileScreen,
        label: DRAWER.TERMS_CONDITIONS_LABEL,
      },
      {
        name: ROUTES.ABOUT_US,
        component: ProfileScreen,
        label: DRAWER.ABOUT_US_LABEL,
      },
    ],
    [],
  );

  const drawerScreenOptions = useMemo(
    () => ({
      headerShown: true,
      header: renderHeader,
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
      drawerContent={renderDrawerContent}
    >
      {screens.map(s => (
        <Drawer.Screen
          key={s.name}
          name={s.name}
          component={s.component}
          options={{
            title: s.label,
            headerShown: !s.ownHeader,
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
    // fontFamily: fontFamily.semiBold,
    fontFamily: fontFamily.light,
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
});

export default MainStackNavigator;
