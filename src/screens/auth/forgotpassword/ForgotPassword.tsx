import React, { memo, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { COMMON, FORGOT_PASSWORD_SCREEN } from '../../../utils/constants';
import commonStyles from '../../../theme/commonStyles';
import { useForm } from 'react-hook-form';
import FormInput from '../../../components/FormInput';
import FormRadioGroup from '../../../components/FormRadioGroup';
import { useDispatch } from 'react-redux';
import { user } from '../../../redux/slices/userSlice';
import LogoBanner from '../../../components/LogoBanner';
import { loginRules } from './validationRules';
import BackHeader from '../../../components/BackHeader';

type FormData = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
  userType: string;
};

const options = [
  {
    label: 'Tutor',
    value: 'tutor',
  },
  {
    label: 'Student',
    value: 'student',
  },
];

const ForgotPassword: React.FC = () => {
  const dispatch = useDispatch();

  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      userType: 'tutor',
    },
  });

  const onSubmit = useCallback(
    (data: FormData) => {
      console.log(data);
      dispatch(user({ email: '' }));
    },
    [dispatch],
  );

  return (
    <View style={commonStyles.container}>
      <BackHeader containerStyle={styles.back} />
      <LogoBanner />
      <View>
        <FormRadioGroup control={control as any} name="userType" options={options} label="I am a" />
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
          style={[commonStyles.button, styles.submitBtn]}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={commonStyles.buttonText}>{COMMON.SUBMIT_TEXT}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(ForgotPassword);
