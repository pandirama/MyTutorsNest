import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

export default StyleSheet.create({
  container: {
    marginVertical: verticalScale(10),
    flexDirection: 'row',
  },
  groupLabel: {
    fontSize: 15,
    fontWeight: '600',
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
    fontSize: 15,
    color: '#111827',
  },
});
