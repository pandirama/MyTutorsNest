import React, { memo } from 'react';
import Logo from '../assets/images/logo.svg';
import { scale, verticalScale } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';

const LogoBanner: React.FC = memo(() => {
  return (
    <Logo
      width={scale(180)}
      height={verticalScale(180)}
      style={styles.logoImage}
    />
  );
});

const styles = StyleSheet.create({
  logoImage: {
    alignSelf: 'center',
  },
});

export default LogoBanner;
