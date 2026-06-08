import React, { memo, useEffect, useRef, useState } from 'react';
import { Animated, Pressable } from 'react-native';
import {
  Controller,
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import { palette } from '@/theme/palette';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import styles from './styles';

type Props<T extends FieldValues> = TextInputProps & {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  rules?: RegisterOptions<T, Path<T>>;
};

const FormInput = <T extends FieldValues>({
  control,
  name,
  label,
  rules,
  ...props
}: Props<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <OutlinedInput
          label={label}
          {...props}
          value={value}
          error={error?.message}
          onChangeText={onChange}
          onBlur={onBlur}
        />
      )}
    />
  );
};

type OutlinedInputProps = Omit<TextInputProps, 'onBlur'> & {
  label?: string;
  value?: string;
  error?: string;
  onBlur?: () => void;
};

const OutlinedInput = ({
  label,
  value,
  error,
  onBlur,
  onFocus,
  placeholder,
  ...props
}: OutlinedInputProps) => {
  const inputRef = useRef<TextInput>(null);
  const [focused, setFocused] = useState(false);

  // Label floats up when the field is focused or has a value.
  const floated = focused || !!value;
  const anim = useRef(new Animated.Value(floated ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: floated ? 1 : 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [floated, anim]);

  const borderColor = error
    ? palette.red
    : focused
    ? palette.primary
    : palette.lightGray;

  const labelColor = error
    ? palette.red
    : focused
    ? palette.primary
    : palette.gray;

  const labelStyle = {
    top: anim.interpolate({
      inputRange: [0, 1],
      outputRange: [styles.metrics.restTop, styles.metrics.floatTop],
    }),
    fontSize: anim.interpolate({
      inputRange: [0, 1],
      outputRange: [styles.metrics.restFontSize, styles.metrics.floatFontSize],
    }),
    color: labelColor,
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.inputContainer, { borderColor }]}
        onPress={() => inputRef.current?.focus()}
      >
        {label && (
          <Animated.Text numberOfLines={1} style={[styles.label, labelStyle]}>
            {label}
          </Animated.Text>
        )}
        <TextInput
          ref={inputRef}
          style={styles.textInput}
          value={value}
          // With a label, hold the placeholder back until the label floats up
          // so the two don't overlap (matching the outlined-input behaviour).
          placeholder={!label || floated ? placeholder : undefined}
          placeholderTextColor={palette.gray}
          onFocus={e => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={() => {
            setFocused(false);
            onBlur?.();
          }}
          {...props}
        />
      </Pressable>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default memo(FormInput);
