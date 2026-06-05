import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import palette from '../../../theme/palette';
import { fontFamily } from '../../../theme/fonts';

const styles = StyleSheet.create({
  loginText: {
    fontSize: moderateScale(20),
    fontFamily: fontFamily[800],
  },
  submitBtn: {
    marginTop: verticalScale(40),
  },
  forgotBtn: {
    marginTop: verticalScale(6),
    alignSelf: 'flex-end',
    marginRight: scale(5),
  },
  forgotText: {
    fontSize: moderateScale(13),
    fontFamily: fontFamily[800],
    color: palette.primary,
  },
  registerView: {
    flexDirection: 'row',
    marginTop: verticalScale(5),
    justifyContent: 'center',
  },
  registerUseText: {
    fontSize: moderateScale(14),
    fontFamily: fontFamily[500],
    color: palette.black,
  },
  registerText: {
    fontSize: moderateScale(14),
    color: palette.primary,
    marginLeft: scale(5),
    fontFamily: fontFamily[800],
  },
});

export default styles;
