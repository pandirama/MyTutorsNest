import { StyleSheet } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
import palette from '../../theme/palette';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  box: {
    width: scale(22),
    height: scale(22),
    borderWidth: moderateScale(1),
    borderColor: palette.black,
    borderRadius: moderateScale(5),
    alignItems: 'center',
    justifyContent:'center'
  },
  selectedBox: {
    borderColor: palette.red,
  },
  label: {
    fontSize: moderateScale(14),
  },
});

export default styles;
