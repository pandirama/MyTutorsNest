import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  title?: string;
  rightIcon?: any;
  containerStyle?: any;
}

const BackHeader = ({ title, rightIcon, containerStyle }: Props) => {
  const navigation = useNavigation();

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={[styles.header, containerStyle]}>
      <TouchableOpacity onPress={onBack}>
        <Ionicons name="arrow-back" size={moderateScale(20)} />
      </TouchableOpacity>
      {title && <Text style={styles.titleTxt}>{title}</Text>}
      {rightIcon && <TouchableOpacity>right</TouchableOpacity>}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: verticalScale(44),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(20)
  },
  titleTxt: {
    fontSize: moderateScale(14),
    flex: 1,
    textAlign: 'center',
  },
});
export default BackHeader;
