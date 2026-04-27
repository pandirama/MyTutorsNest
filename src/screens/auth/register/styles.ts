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
  submitBtn: {
    marginTop: verticalScale(40),
  },
});

export default styles;
