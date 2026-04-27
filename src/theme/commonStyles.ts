import { StyleSheet } from 'react-native';
import palette from '../theme/palette';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const commonStyles = StyleSheet.create({
  container: {
    backgroundColor: palette.white,
    flex: 1,
    paddingHorizontal: scale(25),
  },
  button: {
    backgroundColor: palette.primary,
    paddingVertical: verticalScale(12),
    alignItems: 'center',
    borderRadius: moderateScale(10),
  },
  buttonText: {
    fontSize: moderateScale(18),
    color: palette.white,
  },
});

export default commonStyles;
