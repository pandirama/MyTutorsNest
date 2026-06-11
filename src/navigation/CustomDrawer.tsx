import React, { useCallback, memo } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { palette } from '@/theme/palette';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { fontFamily } from '@/theme/fonts';
import { reset } from './navigationService';
import { ROUTES } from './routes';
import { DRAWER } from '@/utils/constants';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const { navigation } = props;

  const closeDrawer = useCallback(() => navigation.closeDrawer(), [navigation]);

  const handleSignOut = useCallback(() => {
    navigation.closeDrawer();
    reset(ROUTES.AUTH);
  }, [navigation]);

  return (
    <SafeAreaView edges={['right', 'left']} style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.contentContainer}
      >
        <View>
          <TouchableOpacity onPress={closeDrawer} style={styles.closeButton}>
            <Ionicons
              name="close"
              color={palette.black}
              size={moderateScale(26)}
            />
          </TouchableOpacity>

          <View style={styles.headerWrapper}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarText}>T</Text>
            </View>
            <Text style={styles.userName}>Test</Text>
            <Text style={styles.userEmail}>Mail@gmail.com</Text>
          </View>
        </View>
        <View style={styles.drawerItemList}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Ionicons
          name="log-out-outline"
          size={moderateScale(20)}
          color={palette.black}
        />
        <Text style={styles.signOutText}>{DRAWER.SIGN_OUT_TEXT}</Text>
      </TouchableOpacity>
      <Text style={styles.versionText}>{DRAWER.APP_VERSION}</Text>
    </SafeAreaView>
  );
};

export default memo(CustomDrawer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: palette.white,
    marginTop: verticalScale(-20),
  },
  drawerItemList: {
    flex: 1,
    marginTop: verticalScale(15),
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  headerWrapper: {
    alignItems: 'center',
  },
  userName: {
    fontSize: moderateScale(16),
    fontFamily: fontFamily.extraBold,
    color: palette.black,
  },
  userEmail: {
    fontSize: moderateScale(14),
    color: palette.black,
    fontFamily: fontFamily.semiBold,
  },
  signOutButton: {
    alignItems: 'center',
    marginLeft: scale(15),
    marginBottom: verticalScale(15),
    flexDirection: 'row',
  },
  signOutText: {
    fontSize: moderateScale(16),
    fontFamily: fontFamily.bold,
    color: palette.black,
    marginLeft: scale(5),
  },
  versionText: {
    fontSize: moderateScale(12),
    fontFamily: fontFamily.semiBold,
    color: palette.black,
    marginBottom: verticalScale(35),
    marginLeft: scale(10),
    textAlign: 'right',
    marginRight: scale(10),
  },
  avatarText: {
    fontSize: moderateScale(28),
    fontFamily: fontFamily.extraBold,
    color: palette.white,
  },
  avatarCircle: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(40),
    backgroundColor: palette.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
