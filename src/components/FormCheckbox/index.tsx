import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import palette from '../../theme/palette';
import { moderateScale } from 'react-native-size-matters';

type Props<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
};

const FormCheckbox = <T extends FieldValues>({
  control,
  name,
  label,
}: Props<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={false as any}
      render={({ field: { value, onChange } }) => (
        <TouchableOpacity style={styles.row} onPress={() => onChange(!value)}>
          <View style={[styles.box, value && styles.selectedBox]}>
            {value && (
              <Ionicons
                name="checkmark"
                size={moderateScale(16)}
                color={value ? palette.red : palette.lightGray}
              />
            )}
          </View>

          <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default FormCheckbox;
