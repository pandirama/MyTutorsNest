import { StyleSheet } from 'react-native';
import { verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  backHeader: {
    position: 'absolute',
  },
  submitButton: {
    marginTop: verticalScale(40),
  },
});

export default styles;
