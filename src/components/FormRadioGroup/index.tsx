import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Controller, Control, FieldValues, Path } from 'react-hook-form';

import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

type Option = {
  label: string;
  value: string;
};

type Props<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  options: Option[];
  label?: string;
};

function FormRadioGroup<T extends FieldValues>({
  control,
  name,
  label,
  options,
}: Props<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value = 'tutor', onChange } }) => (
        <View style={styles.container}>
          {label && <Text style={styles.groupLabel}>{label}</Text>}

          {options.map(item => {
            const selected = value === item.value;

            return (
              <TouchableOpacity
                key={item.value.toString()}
                style={styles.row}
                onPress={() => onChange(item.value)}
                activeOpacity={0.8}
              >
                <View style={styles.outerCircle}>
                  {selected && (
                    <Ionicons
                      name="radio-button-on"
                      size={22}
                      color="#2563EB"
                    />
                  )}

                  {!selected && (
                    <Ionicons
                      name="radio-button-off"
                      size={22}
                      color="#9CA3AF"
                    />
                  )}
                </View>

                <Text style={styles.optionText}>{item.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    />
  );
}

export default FormRadioGroup;
