import React, { memo } from 'react';
import Logo from '@/assets/images/logo.svg';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { StyleSheet, Text, View } from 'react-native';
import { palette } from '@/theme/palette';
import { fontFamily } from '@/theme/fonts';

type LogoBannerProps = {
  title?: string;
  subTitle?: string;
};

const LogoBanner: React.FC<LogoBannerProps> = ({ title, subTitle }) => {
  return (
    <View style={styles.container}>
      <Logo
        width={scale(180)}
        height={verticalScale(150)}
        style={styles.logoImage}
      />
      {title && <Text style={styles.title}>{title}</Text>}
      {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: verticalScale(10),
  },
  logoImage: {
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: moderateScale(16),
    color: palette.primary,
    fontFamily: fontFamily.bold,
  },
  subTitle: {
    textAlign: 'center',
    fontSize: moderateScale(14),
    color: palette.primary,
    fontFamily: fontFamily.light,
  },
});

export default memo(LogoBanner);
