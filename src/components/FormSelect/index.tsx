import React, {
  useRef,
  useCallback,
  useMemo,
  useImperativeHandle,
  memo,
  JSX,
} from 'react';
import {
  Dimensions,
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
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { fontFamily } from '@/theme/fonts';

interface Props {
  fieldStyle?: StyleProp<ViewStyle>;
  label?: string;
  control: Control<FieldValues>;
  placeholder: string;
  name: string;
  leftIcon?: string;
  LeftIcon?: JSX.Element;
  RightIcon?: JSX.Element;
  error: FieldError;
  disabled?: boolean;
  options: Option[];
  optionLoading?: boolean;
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

const screenWidth = Dimensions.get('screen').width;

const FormSelect = React.forwardRef<
  SelectInputControllerHandle,
  Props
>((props: Props, forwardedRef) => {
  const {
    fieldStyle,
    label,
    control,
    placeholder,
    name,
    LeftIcon,
    RightIcon,
    error,
    disabled = false,
    options,
    optionLoading,
    renderOptionLabel,
  } = props;
  const actionSheetRef = useRef<ActionSheetRef>(null);

  const onChangeRef = useRef<((v: Option | null) => void) | null>(null);

  const openOptionSheet = useCallback(() => {
    actionSheetRef.current?.show();
  }, []);

  const onCloseSheet = useCallback(() => {
    actionSheetRef.current?.hide();
  }, []);

  const onSelectOption = useCallback(
    (value: Option) => {
      onCloseSheet();
      onChangeRef.current?.(value);
    },
    [onCloseSheet],
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
            return (
              <Pressable onPress={!disabled ? openOptionSheet : null}>
                <View
                  style={[
                    styles.selectContainer,
                    isError && styles.selectContainerError,
                  ]}
                >
                  {LeftIcon && LeftIcon}
                  <View style={styles.contentContainer}>
                    {value == null || value === '' ? (
                      <Text style={styles.placeholder}>
                        {placeholder}
                      </Text>
                    ) : (
                      <Text style={styles.valueText}>
                        {(value as Option).title}
                      </Text>
                    )}
                  </View>
                  {optionLoading ? (
                    <ActivityIndicator size="small" />
                  ) : (
                    <Ionicons
                      name="chevron-forward-outline"
                      color={palette.primary}
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
        {isError && <Text style={styles.errorText}>{error.message}</Text>}
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
        <FlatList<Option>
          contentContainerStyle={styles.optionsList}
          data={options}
          keyExtractor={useCallback(
            (item: Option, index: number) => item?._id || `opt_${index}`,
            [],
          )}
          renderItem={useCallback(
            ({ item }: ListRenderItemInfo<Option>) => (
              <OptionRow
                item={item}
                onPress={onSelectOption}
                renderOptionLabel={renderOptionLabel}
                getOptionLabel={(it: any) =>
                  String(it?.label || it?.title || '')
                }
                containerStyle={[styles.optionDivider, styles.optionFullWidth]}
                optionTextStyle={styles.optionText}
              />
            ),
            [onSelectOption, renderOptionLabel],
          )}
        />
      </ActionSheet>
    </>
  );
});

FormSelect.displayName = 'FormSelect';

export default memo(FormSelect);

const styles = StyleSheet.create({
  selectContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: palette.primary,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    backgroundColor: palette.white,
    paddingVertical: verticalScale(4),
    paddingHorizontal: scale(15),
    height: verticalScale(52),
  },
  selectContainerError: {
    borderColor: palette.red,
  },
  label: {
    marginBottom: verticalScale(8),
    color: palette.primary,
    fontWeight: '400',
    fontSize: moderateScale(14),
    fontFamily: fontFamily[400],
  },
  labelError: {
    color: palette.red,
  },
  contentContainer: {
    fontSize: moderateScale(14),
    flex: 1,
    letterSpacing: 0.5,
    paddingHorizontal: scale(16),
  },
  placeholder: {
    color: palette.primary,
    fontSize: moderateScale(14),
    fontFamily: fontFamily[500],
    fontWeight: '500',
  },
  valueText: {
    borderRadius: moderateScale(2),
    marginRight: scale(6),
    color: palette.primary,
    fontSize: moderateScale(14),
    fontFamily: fontFamily[500],
    fontWeight: '500',
  },
  errorText: {
    color: palette.red,
    fontFamily: fontFamily[400],
    fontWeight: '400',
    fontSize: moderateScale(14),
  },
  optionDivider: {
    borderBottomWidth: 1,
    borderBottomColor: palette.primary,
  },
  optionFullWidth: {
    width: screenWidth - 16,
  },
  optionText: {
    fontFamily: fontFamily[500],
    fontWeight: '500',
    color: palette.primary,
  },
  optionsList: {
    width: '100%',
    alignItems: 'flex-start',
  },
  actionSheetClose: {
    alignItems: 'flex-end',
    paddingRight: scale(15),
    paddingTop: verticalScale(15),
  },
  actionSheetContainer: {
    width: '100%',
  },
});
