import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Controller, Control, FieldValues, Path } from 'react-hook-form';

import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import palette from '../../theme/palette';
import { moderateScale } from 'react-native-size-matters';

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

const FormRadioGroup = <T extends FieldValues>({
  control,
  name,
  label,
  options,
}: Props<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value = name, onChange } }) => (
        <View style={styles.container}>
          {label && <Text style={styles.groupLabel}>{label}</Text>}
          <View style={styles.subContainer}>
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
                        size={moderateScale(18)}
                        color={palette.primary}
                      />
                    )}

                    {!selected && (
                      <Ionicons
                        name="radio-button-off"
                        size={moderateScale(18)}
                        color={palette.gray}
                      />
                    )}
                  </View>

                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      )}
    />
  );
};

export default FormRadioGroup;
