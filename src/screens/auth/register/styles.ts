import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  back: {
    position: 'absolute',
  },
  logoImage: {
    alignSelf: 'center',
  },
  loginText: {
    fontSize: moderateScale(20),
  },
  termsContainer: {
    marginTop: verticalScale(15),
  },
  content: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: verticalScale(20),
  },
});

export default styles;
