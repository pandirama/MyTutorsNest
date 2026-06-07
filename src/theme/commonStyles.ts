import { StyleSheet } from 'react-native';
import { palette } from '../theme/palette';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { fontFamily } from './fonts';

const commonStyles = StyleSheet.create({
  container: {
    backgroundColor: palette.white,
    flex: 1,
    paddingHorizontal: scale(20),
  },
  mainContainer: {
    backgroundColor: palette.white,
    flex: 1,
  },
  button: {
    backgroundColor: palette.primary,
    paddingVertical: verticalScale(9),
    alignItems: 'center',
    borderRadius: moderateScale(10),
  },
  buttonText: {
    fontSize: moderateScale(18),
    color: palette.white,
    fontFamily: fontFamily.bold,
  },
  disabled: {
    backgroundColor: palette.disabled,
  },
});

export default commonStyles;
