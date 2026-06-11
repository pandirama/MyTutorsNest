import React, { useCallback, memo } from 'react';
import {
  StyleSheet,
  Platform,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import { moderateScale } from 'react-native-size-matters';
import HomeScreen from '@/screens/dashboard/home/HomeScreen';
import { palette } from '@/theme/palette';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ROUTES } from './routes';

const ICON_SIZE = moderateScale(22);

const TAB_SCREENS = [
  { name: ROUTES.HOME_STACK, component: HomeScreen, position: 'LEFT' },
  { name: ROUTES.SUBJECTS_STACK, component: HomeScreen, position: 'LEFT' },
  { name: ROUTES.CHAT_STACK, component: HomeScreen, position: 'RIGHT' },
  { name: ROUTES.PROFILE_STACK, component: HomeScreen, position: 'RIGHT' },
];

const TAB_ICONS: Record<string, string> = {
  [ROUTES.HOME_STACK]: 'home-outline',
  [ROUTES.SUBJECTS_STACK]: 'book-outline',
  [ROUTES.CHAT_STACK]: 'chatbubbles-outline',
  [ROUTES.PROFILE_STACK]: 'person-outline',
};

const DashboardBottomNavigator = () => {
  const { width } = useWindowDimensions();

  const renderCircle = useCallback(
    () => (
      <TouchableOpacity style={styles.circleButtonWrapper}>
          <Ionicons
            name="calendar-outline"
            size={moderateScale(30)}
            color={palette.primary}
          />
      </TouchableOpacity>
    ),
    [],
  );

  const renderIcon = useCallback((routeName: string, selectedTab: string) => {
    const isFocused = routeName === selectedTab;
    return (
      <View style={isFocused ? styles.selectedIconContainer : undefined}>
        <Ionicons
          name={TAB_ICONS[routeName]}
          size={ICON_SIZE}
          color={isFocused ? palette.white : palette.gray}
        />
      </View>
    );
  }, []);

  const renderTabBar = useCallback(
    ({ routeName, selectedTab, navigate }: any) => (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabBarItem}
      >
        {renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    ),
    [renderIcon],
  );

  return (
    <CurvedBottomBar.Navigator
      id="dashboard-bottom-bar"
      type="DOWN"
      shadowStyle={styles.shadowStyle}
      height={moderateScale(55)}
      width={width}
      bgColor={palette.white}
      initialRouteName="HomeStack"
      borderTopLeftRight
      borderColor={palette.lightGray}
      borderWidth={1}
      style={styles.navigator}
      backBehavior="initialRoute"
      circlePosition="CENTER"
      circleWidth={moderateScale(60)}
      screenOptions={{ headerShown: false }}
      screenListeners={{}}
      renderCircle={renderCircle}
      tabBar={renderTabBar}
      defaultScreenOptions={{}}
    >
      {TAB_SCREENS.map(({ name, component, position }) => (
        <CurvedBottomBar.Screen
          key={name}
          name={name}
          component={component}
          {...(position ? { position } : {})}
        />
      ))}
    </CurvedBottomBar.Navigator>
  );
};

export default memo(DashboardBottomNavigator);

const styles = StyleSheet.create({
  selectedIconContainer: {
    backgroundColor: palette.primary,
    borderRadius: moderateScale(100),
    padding: moderateScale(8),
  },
  shadowStyle: {
    shadowColor: palette.black,
    shadowRadius: 5,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 1,
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 1 },
      },
    }),
  },
  circleButtonWrapper: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.white,
    bottom: moderateScale(30),
    borderWidth: 1,
    borderColor: palette.border,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 10,
        shadowOpacity: 10,
        shadowOffset: { width: 3, height: 2 },
      },
    }),
    shadowColor: palette.black,
    shadowRadius: 3,
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigator: {
    backgroundColor: palette.offWhite,
  },
});
