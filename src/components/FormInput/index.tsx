import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { Controller, Control, FieldValues, Path, RegisterOptions } from 'react-hook-form';
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
        <View style={styles.container}>
          {label && <Text style={styles.label}>{label}</Text>}

          <TextInput
            style={styles.input}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            {...props}
          />
          {error && <Text style={styles.errorText}>{error.message}</Text>}
        </View>
      )}
    />
  );
};

export default FormInput;
