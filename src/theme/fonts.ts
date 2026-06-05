import { Platform } from 'react-native';

// iOS resolves fonts by their PostScript name, Android by the file name.
// Keep both in sync so fontFamily applies on both platforms.
export const fontFamily = Platform.select({
  ios: {
    300: 'Nunito-Light',
    400: 'Nunito-SemiBold',
    500: 'Nunito-SemiBold',
    700: 'Nunito-Bold',
    800: 'Nunito-ExtraBold',
    900: 'Nunito-Black',
  },
  default: {
    300: 'NunitoLight',
    400: 'NunitoSemiBold',
    500: 'NunitoSemiBold',
    700: 'NunitoBold',
    800: 'NunitoExtraBold',
    900: 'NunitoBlack',
  },
}) as Record<number, string>;
