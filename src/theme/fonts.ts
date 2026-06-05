import { Platform } from 'react-native';

// iOS resolves fonts by their PostScript name, Android by the file name.
// Keep both in sync so fontFamily applies on both platforms.
export const fontFamily = Platform.select({
  ios: {
    light: 'Nunito-Light',
    semiBold: 'Nunito-SemiBold',
    bold: 'Nunito-Bold',
    extraBold: 'Nunito-ExtraBold',
    black: 'Nunito-Black',
  },
  default: {
    light: 'NunitoLight',
    semiBold: 'NunitoSemiBold',
    bold: 'NunitoBold',
    extraBold: 'NunitoExtraBold',
    black: 'NunitoBlack',
  },
}) as Record<string, string>;

