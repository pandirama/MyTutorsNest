import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { memo, useCallback } from 'react';
import { toggleDrawer } from '@/navigation/navigationService';
import { ROUTES } from '@/navigation/routes';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { palette } from '@/theme/palette';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { fontFamily } from '@/theme/fonts';
import Logo from '@/assets/images/logo.svg';

interface MainHeaderProps {
  title: string;
  navigation: { navigate: (screen: string) => void } | any;
  curveBorder?: boolean;
  icon?: string;
  backGroundWithoutCurve?: boolean;
  RightAction?: React.ReactNode;
}

const MainHeader = ({
  title,
  navigation,
  curveBorder = false,
  backGroundWithoutCurve = false,
  icon = 'menu-outline',
  RightAction = null,
}: MainHeaderProps) => {
  const onToggleDrawer = useCallback(() => toggleDrawer(), []);
  const goToNotifications = useCallback(
    () => navigation?.navigate?.(ROUTES.NOTIFICATIONS),
    [navigation],
  );

  return (
    <View
      style={[
        styles.container,
        curveBorder && styles.curvedBottom,
        backGroundWithoutCurve && styles.background,
      ]}
    >
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onToggleDrawer}>
          <Ionicons
            name={icon}
            size={moderateScale(24)}
            color={palette.black}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Logo width={scale(30)} height={verticalScale(30)} />
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
      </View>

      {RightAction ? (
        RightAction
      ) : (
        <View style={[styles.iconContainer, styles.rightIconContainer]}>
          <Pressable onPress={goToNotifications}>
            <MaterialCommunityIcons
              size={moderateScale(24)}
              color={palette.black}
              name="bell-outline"
            />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default memo(MainHeader);

const styles = StyleSheet.create({
  container: {
    paddingLeft: scale(12),
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalScale(40),
    backgroundColor: palette.white,
  },
  iconContainer: {
    width: scale(35),
    padding: 5,
  },
  title: {
    fontSize: moderateScale(14),
    fontWeight: '700',
    fontFamily: fontFamily.bold,
    color: palette.black,
  },
  curvedBottom: {
    borderBottomLeftRadius: moderateScale(16),
    borderBottomRightRadius: moderateScale(16),
    backgroundColor: palette.gray,
  },
  background: {
    backgroundColor: palette.gray,
  },
  rightIconContainer: {
    marginRight: scale(10),
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
