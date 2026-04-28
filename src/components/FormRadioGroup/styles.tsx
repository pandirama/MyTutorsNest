import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import palette from '../../theme/palette';

export default StyleSheet.create({
  container: {
    marginVertical: verticalScale(10),
  },
  subContainer: {
    flexDirection: 'row',
  },
  groupLabel: {
    fontSize: moderateScale(15),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  outerCircle: {
    marginRight: scale(10),
  },
  optionText: {
    fontSize: moderateScale(15),
    color: palette.black,
  },
});
