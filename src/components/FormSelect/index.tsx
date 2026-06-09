import React, {
  useRef,
  useCallback,
  useMemo,
  useImperativeHandle,
  memo,
  JSX,
} from 'react';
import {
  FlatList,
  Platform,
  StyleProp,
  ViewStyle,
  View,
  StyleSheet,
  ActivityIndicator,
  Pressable,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
} from 'react-native';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
import { Control, Controller, FieldValues, FieldError } from 'react-hook-form';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import OptionRow from '@/components/FormSelect/OptionRow';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { palette } from '@/theme/palette';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { COMMON } from '@/utils/constants';
import styles from './styles';

interface Props {
  fieldStyle?: StyleProp<ViewStyle>;
  label?: string;
  control: Control<FieldValues>;
  placeholder?: string;
  name: string;
  leftIcon?: string;
  LeftIcon?: JSX.Element;
  RightIcon?: JSX.Element;
  error?: FieldError;
  disabled?: boolean;
  options: Option[];
  optionLoading?: boolean;
  multiple?: boolean;
  optionKey?: string;
  searchByKey?: string;
  getOptionLabel?: (opt: Option) => string;
  renderOptionLabel?: (opt: Option) => JSX.Element;
}

export interface Option {
  _id?: string;
  label?: string;
  title?: string;
  [key: string]: unknown;
}

export interface SelectInputControllerHandle {
  show: () => void;
  hide: () => void;
}

const defaultGetOptionLabel = (opt: Option): string =>
  String(opt?.label ?? opt?.title ?? '');

const FormSelect = React.forwardRef<SelectInputControllerHandle, Props>(
  (props: Props, forwardedRef) => {
    const {
      fieldStyle,
      label,
      control,
      placeholder = COMMON.SELECT_PLACEHOLDER,
      name,
      LeftIcon,
      RightIcon,
      error,
      disabled = false,
      options,
      optionLoading,
      multiple = false,
      optionKey = '_id',
      getOptionLabel = defaultGetOptionLabel,
      renderOptionLabel,
    } = props;
    const actionSheetRef = useRef<ActionSheetRef>(null);

    const onChangeRef = useRef<((v: Option | Option[] | null) => void) | null>(
      null,
    );
    // Mirror of the current field value so multi-select toggles can read it
    // without re-subscribing the FlatList renderItem to the form value.
    const valueRef = useRef<Option | Option[] | null>(null);

    const openOptionSheet = useCallback(() => {
      actionSheetRef.current?.show();
    }, []);

    const onCloseSheet = useCallback(() => {
      actionSheetRef.current?.hide();
    }, []);

    const isSelected = useCallback(
      (item: Option, value: Option | Option[] | null) => {
        if (multiple) {
          return (
            Array.isArray(value) &&
            value.some(v => v?.[optionKey] === item?.[optionKey])
          );
        }
        return (
          !!value &&
          !Array.isArray(value) &&
          (value as Option)?.[optionKey] === item?.[optionKey]
        );
      },
      [multiple, optionKey],
    );

    const onSelectOption = useCallback(
      (item: Option) => {
        if (multiple) {
          const current = Array.isArray(valueRef.current)
            ? (valueRef.current as Option[])
            : [];
          const exists = current.some(
            v => v?.[optionKey] === item?.[optionKey],
          );
          const next = exists
            ? current.filter(v => v?.[optionKey] !== item?.[optionKey])
            : [...current, item];
          onChangeRef.current?.(next);
        } else {
          onChangeRef.current?.(item);
          onCloseSheet();
        }
      },
      [multiple, optionKey, onCloseSheet],
    );

    const getValueText = useCallback(
      (value: Option | Option[] | null) => {
        if (multiple) {
          if (!Array.isArray(value) || value.length === 0) {
            return '';
          }
          return value.map(getOptionLabel).join(', ');
        }
        if (value == null) {
          return '';
        }
        return getOptionLabel(value as Option);
      },
      [multiple, getOptionLabel],
    );

    const isError = Boolean(error);

    const insets = useSafeAreaInsets();

    const actionSheetContainerStyle = useMemo(
      () =>
        StyleSheet.flatten([
          styles.actionSheetContainer,
          {
            paddingBottom:
              insets.bottom +
              (Platform.OS === 'ios' ? verticalScale(0) : verticalScale(40)),
          },
        ]),
      [insets.bottom],
    );

    useImperativeHandle(
      forwardedRef,
      () => ({
        show: openOptionSheet,
        hide: onCloseSheet,
      }),
      [openOptionSheet, onCloseSheet],
    );

    const keyExtractor = useCallback(
      (item: Option, index: number) =>
        String(item?.[optionKey] ?? `opt_${index}`),
      [optionKey],
    );

    return (
      <>
        <View style={fieldStyle}>
          {label && (
            <Text style={[styles.label, isError && styles.labelError]}>
              {label}
            </Text>
          )}
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => {
              onChangeRef.current = onChange;
              valueRef.current = value;
              const valueText = getValueText(value);
              return (
                <Pressable onPress={!disabled ? openOptionSheet : undefined}>
                  <View
                    style={[
                      styles.selectContainer,
                      isError && styles.selectContainerError,
                    ]}
                  >
                    {LeftIcon && LeftIcon}
                    <View style={styles.contentContainer}>
                      {valueText === '' ? (
                        <Text style={styles.placeholder}>{placeholder}</Text>
                      ) : (
                        <Text style={styles.valueText} numberOfLines={1}>
                          {valueText}
                        </Text>
                      )}
                    </View>
                    {optionLoading ? (
                      <ActivityIndicator size="small" />
                    ) : (
                      <Ionicons
                        name="chevron-forward-outline"
                        color={palette.gray}
                        size={moderateScale(20)}
                      />
                    )}
                    {RightIcon && RightIcon}
                  </View>
                </Pressable>
              );
            }}
            name={name}
          />
          {isError && <Text style={styles.errorText}>{error?.message}</Text>}
        </View>

        <ActionSheet
          containerStyle={actionSheetContainerStyle}
          ref={actionSheetRef}
        >
          <TouchableOpacity
            style={styles.actionSheetClose}
            onPress={onCloseSheet}
          >
            <Ionicons
              name={'close'}
              size={moderateScale(25)}
              color={palette.black}
            />
          </TouchableOpacity>
          <Controller
            control={control}
            render={({ field: { value } }) => (
              <FlatList<Option>
                contentContainerStyle={styles.optionsList}
                data={options}
                extraData={value}
                keyExtractor={keyExtractor}
                renderItem={({ item }: ListRenderItemInfo<Option>) => (
                  <OptionRow
                    item={item}
                    onPress={onSelectOption}
                    multiple={multiple}
                    selected={isSelected(item, value)}
                    renderOptionLabel={renderOptionLabel}
                    getOptionLabel={getOptionLabel}
                    containerStyle={[
                      styles.optionRow,
                      styles.optionDivider,
                      styles.optionFullWidth,
                    ]}
                    selectedStyle={styles.optionSelected}
                    optionTextStyle={styles.optionText}
                  />
                )}
              />
            )}
            name={name}
          />
          {multiple && (
            <TouchableOpacity style={styles.doneButton} onPress={onCloseSheet}>
              <Text style={styles.doneButtonText}>{COMMON.DONE_TEXT}</Text>
            </TouchableOpacity>
          )}
        </ActionSheet>
      </>
    );
  },
);

export default memo(FormSelect);
