import React, { JSX, memo, useCallback } from 'react';
import { ViewStyle, TextStyle, TouchableOpacity, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { palette } from '@/theme/palette';
import { moderateScale } from 'react-native-size-matters';
import styles from './styles';

type Props = {
  item: any,
  onPress: (item: any) => void,
  optionKey?: string,
  renderOptionLabel?: (opt: any) => JSX.Element,
  getOptionLabel?: (opt: any) => string,
  selected?: boolean,
  multiple?: boolean,
  containerStyle?: ViewStyle | ViewStyle[] | any,
  selectedStyle?: ViewStyle | ViewStyle[] | any,
  optionTextStyle?: TextStyle | TextStyle[] | any,
};

function OptionRowComponent({
  item,
  onPress,
  renderOptionLabel,
  getOptionLabel,
  selected,
  multiple,
  containerStyle,
  selectedStyle,
  optionTextStyle,
}: Props) {
  const handlePress = useCallback(() => onPress(item), [onPress, item]);

  return (
    <TouchableOpacity
      style={[containerStyle, selected && selectedStyle]}
      onPress={handlePress}
      accessibilityRole="button"
      accessibilityLabel={getOptionLabel ? getOptionLabel(item) : String(item)}
      accessibilityState={{ selected: !!selected }}>
      <View style={styles.optionRowContent}>
        {multiple && (
          <Ionicons
            name={selected ? 'checkbox' : 'square-outline'}
            size={moderateScale(20)}
            color={selected ? palette.primary : palette.gray}
            style={styles.optionIndicator}
          />
        )}
        {renderOptionLabel ? (
          renderOptionLabel(item)
        ) : (
          <Text style={optionTextStyle}>
            {getOptionLabel ? getOptionLabel(item) : ''}
          </Text>
        )}
      </View>
      {!multiple && selected && (
        <Ionicons
          name="checkmark"
          size={moderateScale(20)}
          color={palette.primary}
        />
      )}
    </TouchableOpacity>
  );
}

export default memo(OptionRowComponent);
