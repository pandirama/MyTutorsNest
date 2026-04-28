import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import palette from '../../theme/palette';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginVertical: verticalScale(5),
    marginLeft: scale(5),
  },
  box: {
    width: scale(18),
    height: scale(18),
    borderWidth: moderateScale(1),
    borderColor: palette.black,
    borderRadius: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedBox: {
    borderColor: palette.primary,
  },
  label: {
    fontSize: moderateScale(14),
    marginLeft: scale(8),
    textAlign: 'center',
  },
});

export default styles;
