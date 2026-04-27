import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import palette from '../../theme/palette';

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(20),
  },
  label: {
    marginBottom: verticalScale(6),
    fontSize: moderateScale(14),
  },
  input: {
    borderRadius: moderateScale(10),
    borderWidth: moderateScale(1),
    borderColor: palette.lightGray,
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(10),
    width: '100%',
  },
  errorText: {
    color: palette.red,
    marginTop: verticalScale(4),
    fontSize: moderateScale(12),
    marginLeft: scale(5),
  },
});

export default styles;
