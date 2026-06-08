import React, { memo, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import {
  COMMON,
  FORGOT_PASSWORD_SCREEN,
  USER_TYPE,
  USER_TYPE_OPTIONS,
} from '@/utils/constants';
import commonStyles from '@/styles/commonStyles';
import { useForm } from 'react-hook-form';
import FormInput from '@/components/FormInput';
import FormRadioGroup from '@/components/FormRadioGroup';
import { useDispatch } from 'react-redux';
import { setUser } from '@/redux/slices/userSlice';
import LogoBanner from '@/components/LogoBanner';
import { loginRules } from './validationRules';
import BackHeader from '@/components/BackHeader';

type FormData = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
  userType: string;
};

const ForgotPassword: React.FC = () => {
  const dispatch = useDispatch();

  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      userType: USER_TYPE.TUTOR,
    },
  });

  const onSubmit = useCallback(
    (data: FormData) => {
      console.log(data);
      dispatch(setUser({ email: '' }));
    },
    [dispatch],
  );

  return (
    <View style={commonStyles.container}>
      <BackHeader containerStyle={styles.backHeader} />
      <LogoBanner />
      <View>
        <FormRadioGroup
          control={control as any}
          name="userType"
          options={USER_TYPE_OPTIONS}
          label={COMMON.USER_ROLE_LABEL}
        />
        <FormInput
          control={control as any}
          name="oldPassword"
          secureTextEntry
          label={FORGOT_PASSWORD_SCREEN.OLD_INPUT_TEXT}
          rules={loginRules.password}
          returnKeyType="next"
        />
        <FormInput
          control={control as any}
          name="newPassword"
          label={FORGOT_PASSWORD_SCREEN.NEW_PASSWORD_INPUT_TEXT}
          secureTextEntry
          returnKeyType="next"
          rules={loginRules.password}
        />
        <FormInput
          control={control as any}
          name="confirmPassword"
          label={FORGOT_PASSWORD_SCREEN.RETYPE_PASSWORD_INPUT_TEXT}
          secureTextEntry
          returnKeyType="done"
          rules={loginRules.password}
        />
        <TouchableOpacity
          style={[commonStyles.button, styles.submitButton]}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={commonStyles.buttonText}>{COMMON.SUBMIT_TEXT}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(ForgotPassword);
