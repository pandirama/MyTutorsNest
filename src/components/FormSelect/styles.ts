import { Dimensions, StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { palette } from '@/theme/palette';
import { fontFamily } from '@/theme/fonts';

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    backgroundColor: palette.white,
    borderRadius: moderateScale(10),
    borderWidth: moderateScale(1),
    borderColor: palette.lightGray,
    height: verticalScale(40),
    marginTop: verticalScale(15),
    width: '100%',
    paddingRight: scale(8),
  },
  selectContainerError: {
    borderColor: palette.red,
  },
  label: {
    marginBottom: verticalScale(8),
    color: palette.primary,
    fontWeight: '400',
    fontSize: moderateScale(14),
    fontFamily: fontFamily.semiBold,
  },
  labelError: {
    color: palette.red,
  },
  contentContainer: {
    fontSize: moderateScale(14),
    flex: 1,
    letterSpacing: 0.5,
    paddingHorizontal: scale(16),
  },
  placeholder: {
    color: palette.gray,
    fontSize: moderateScale(14),
  },
  valueText: {
    borderRadius: moderateScale(2),
    marginRight: scale(6),
    color: palette.black,
    fontSize: moderateScale(14),
    fontFamily: fontFamily.semiBold,
    fontWeight: '500',
  },
  errorText: {
    color: palette.red,
    fontFamily: fontFamily.semiBold,
    fontWeight: '400',
    fontSize: moderateScale(14),
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(12),
    paddingLeft: scale(16),
  },
  optionSelected: {
    backgroundColor: palette.offWhite,
  },
  optionDivider: {
    borderBottomWidth: 1,
    borderBottomColor: palette.lightGray,
  },
  optionFullWidth: {
    width: screenWidth - 16,
  },
  optionText: {
    fontFamily: fontFamily.semiBold,
    fontWeight: '500',
    color: palette.black,
  },
  optionsList: {
    width: '100%',
    alignItems: 'flex-start',
  },
  actionSheetClose: {
    alignItems: 'flex-end',
    paddingRight: scale(15),
    paddingTop: verticalScale(15),
  },
  actionSheetContainer: {
    width: '100%',
  },
  doneButton: {
    backgroundColor: palette.primary,
    borderRadius: moderateScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: scale(15),
    marginTop: verticalScale(10),
    paddingVertical: verticalScale(12),
  },
  doneButtonText: {
    color: palette.white,
    fontSize: moderateScale(14),
    fontFamily: fontFamily.semiBold,
    fontWeight: '500',
  },
  optionRowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  optionIndicator: {
    marginRight: moderateScale(10),
  },
});

export default styles;
