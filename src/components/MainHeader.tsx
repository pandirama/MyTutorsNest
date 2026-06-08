import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { memo, useCallback } from 'react';
import { toggleDrawer } from '@/navigation/navigationService';
import { ROUTES } from '@/navigation/routes';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { palette } from '@/theme/palette';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { fontFamily } from '@/theme/fonts';

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
      ]}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onToggleDrawer}>
          <Ionicons name={icon} size={moderateScale(24)} color={palette.black} />
        </TouchableOpacity>
      </View>

      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>

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
    paddingLeft: moderateScale(15),
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalScale(60),
  },
  iconContainer: {
    width: scale(35),
    padding: 5,
  },
  title: {
    fontSize: moderateScale(16),
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: fontFamily.bold,
    color: palette.black,
    flex: 1,
  },
  curvedBottom: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: palette.gray,
  },
  background: {
    backgroundColor: palette.gray,
  },
  rightIconContainer: {
    marginRight: moderateScale(10),
  },
});
