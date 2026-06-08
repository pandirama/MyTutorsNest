import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { palette } from '@/theme/palette';

// Shared numbers the floating-label animation interpolates between.
const metrics = {
  restTop: verticalScale(11),
  floatTop: verticalScale(-8),
  restFontSize: moderateScale(14),
  floatFontSize: moderateScale(12),
};

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(15),
  },
  inputContainer: {
    borderRadius: moderateScale(10),
    borderWidth: moderateScale(1),
    borderColor: palette.lightGray,
    paddingHorizontal: scale(15),
    width: '100%',
    justifyContent: 'center',
  },
  textInput: {
    paddingVertical: verticalScale(11),
    fontSize: moderateScale(14),
    color: palette.black,
    padding: 0,
    margin: 0,
  },
  label: {
    position: 'absolute',
    left: scale(12),
    backgroundColor: palette.white,
    paddingHorizontal: scale(4),
  },
  errorText: {
    color: palette.red,
    marginTop: verticalScale(4),
    fontSize: moderateScale(12),
    marginLeft: scale(5),
  },
});

export default { ...styles, metrics };
