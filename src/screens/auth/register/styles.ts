import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  backHeader: {
    position: 'absolute',
  },
  termsContainer: {
    marginTop: verticalScale(15),
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: verticalScale(20),
  },

  dropdown: {
    height: moderateScale(50),
    borderColor: 'gray',
    borderWidth: moderateScale(0.5),
    borderRadius: moderateScale(8),
    paddingHorizontal: scale(8),
  },
  icon: {
    marginRight: scale(5),
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: scale(22),
    top: verticalScale(8),
    zIndex: 999,
    paddingHorizontal: scale(8),
    fontSize: moderateScale(14),
  },
  placeholderStyle: {
    fontSize: moderateScale(16),
  },
  selectedTextStyle: {
    fontSize: moderateScale(16),
  },
  iconStyle: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  inputSearchStyle: {
    height: moderateScale(40),
    fontSize: moderateScale(16),
  },
});

export default styles;
