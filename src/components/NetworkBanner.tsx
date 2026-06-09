import React, { useEffect, useRef, useState, memo } from 'react';
import { StyleSheet, Animated, Text } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { palette } from '@/theme/palette';
import { fontFamily } from '@/theme/fonts';
import { NETWORK } from '@/utils/constants';

const NetworkBanner: React.FC = () => {
  const [isConnected, setIsConnected] = useState(true);
  const slideAnim = useRef<Animated.Value | null>(null);
  if (!slideAnim.current) {
    slideAnim.current = new Animated.Value(-verticalScale(50));
  }

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected ?? false);
    });

    NetInfo.fetch().then(state => {
      setIsConnected(state.isConnected ?? false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const toValue = isConnected ? -verticalScale(50) : 0;
    const animation = Animated.timing(slideAnim.current!, {
      toValue,
      duration: NETWORK.ANIMATION_DURATION,
      useNativeDriver: true,
    });
    animation.start();
    return () => {
      animation.stop?.();
    };
  }, [isConnected]);

  const insets = useSafeAreaInsets();

  if (isConnected) {
    return null;
  }

  return (
    <Animated.View
      style={[
        styles.banner,
        { top: insets.top, transform: [{ translateY: slideAnim.current! }] },
      ]}>
      <Text style={styles.bannerText}>{NETWORK.NO_CONNECTION_TEXT}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  banner: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: palette.primary,
    paddingVertical: verticalScale(10),
    alignItems: 'center',
    zIndex: 9999,
  },
  bannerText: {
    color: palette.white,
    fontFamily: fontFamily.bold,
    fontWeight: '700',
    fontSize: moderateScale(16),
  },
});

export default memo(NetworkBanner);
