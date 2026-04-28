import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { fontFamily } from '../../theme/fonts';
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
    marginBottom: verticalScale(10),
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
    fontFamily: fontFamily[500],
  },
  selectedOptionText: {
    fontFamily: fontFamily[700],
  },
});
