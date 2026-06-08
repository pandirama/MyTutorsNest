import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { fontFamily } from '@/theme/fonts';
import { palette } from '@/theme/palette';

const styles = StyleSheet.create({
  submitButton: {
    marginTop: verticalScale(40),
  },
  forgotPasswordButton: {
    marginTop: verticalScale(6),
    alignSelf: 'flex-end',
    marginRight: scale(5),
  },
  forgotPasswordText: {
    fontSize: moderateScale(13),
    fontFamily: fontFamily.bold,
    color: palette.primary,
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(5),
    justifyContent: 'center',
  },
  registerPromptText: {
    fontSize: moderateScale(14),
    fontFamily: fontFamily.semiBold,
    color: palette.black,
  },
  registerLinkText: {
    fontSize: moderateScale(14),
    color: palette.primary,
    marginLeft: scale(5),
    fontFamily: fontFamily.extraBold,
  },
});

export default styles;
