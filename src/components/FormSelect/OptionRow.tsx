import React, { JSX, memo, useCallback } from 'react';
import { ViewStyle, TextStyle, TouchableOpacity, Text } from 'react-native';

type Props = {
  item: any,
  onPress: (item: any) => void,
  optionKey?: string,
  renderOptionLabel?: (opt: any) => JSX.Element,
  getOptionLabel?: (opt: any) => string,
  selected?: boolean,
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
  containerStyle,
  optionTextStyle,
}: Props) {
  const handlePress = useCallback(() => onPress(item), [onPress, item]);

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={handlePress}
      accessibilityRole="button"
      accessibilityLabel={getOptionLabel ? getOptionLabel(item) : String(item)}
      accessibilityState={{ selected: !!selected }}>
      {renderOptionLabel ? (
        renderOptionLabel(item)
      ) : (
        <Text style={optionTextStyle}>
          {getOptionLabel ? getOptionLabel(item) : ''}
        </Text>
      )}
    </TouchableOpacity>
  );
}

export default memo(OptionRowComponent);
