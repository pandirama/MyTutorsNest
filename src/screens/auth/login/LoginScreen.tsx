import React, { memo, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import {
  COMMON,
  LOGIN_SCREEN,
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
import { ROUTES } from '@/navigation/routes';

type FormData = {
  email: string;
  password: string;
  userType: string;
};

const LoginScreen: React.FC = ({ navigation }: any) => {
  const dispatch = useDispatch();

  const { control, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
      userType: USER_TYPE.TUTOR,
    },
  });

  const onSubmit = useCallback(
    (data: FormData) => {
      console.log(data);
      navigation.navigate(ROUTES.MAIN);
      dispatch(setUser({ email: data.email }));
    },
    [dispatch, navigation],
  );

  const onRegister = useCallback(() => {
    reset();
    navigation.navigate(ROUTES.SIGNUP);
  }, [reset, navigation]);

  const onForgotPassword = useCallback(() => {
    reset();
    navigation.navigate(ROUTES.FORGOT_PASSWORD);
  }, [reset, navigation]);

  return (
    <View style={commonStyles.container}>
      <LogoBanner title={LOGIN_SCREEN.TITLE} subTitle={LOGIN_SCREEN.SUBTITLE} />
      <View>
        <FormRadioGroup
          control={control as any}
          name="userType"
          options={USER_TYPE_OPTIONS}
          label={COMMON.USER_ROLE_LABEL}
        />
        <FormInput
          control={control as any}
          name="email"
          label={LOGIN_SCREEN.EMAIL_INPUT_TEXT}
          rules={loginRules.email}
          keyboardType="email-address"
          returnKeyType="next"
        />
        <FormInput
          control={control as any}
          name="password"
          label={LOGIN_SCREEN.PASSWORD_INPUT_TEXT}
          secureTextEntry
          returnKeyType="done"
          rules={loginRules.password}
        />
        <TouchableOpacity style={styles.forgotPasswordButton} onPress={onForgotPassword}>
          <Text style={styles.forgotPasswordText}>
            {LOGIN_SCREEN.FORGOT_PASSWORD_TEXT}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[commonStyles.button, styles.submitButton]}
          // onPress={handleSubmit(onSubmit)}
          onPress={() =>
            navigation.navigate(ROUTES.MAIN, {
              screen: ROUTES.HOME,
            })
          }
        >
          <Text style={commonStyles.buttonText}>{COMMON.SUBMIT_TEXT}</Text>
        </TouchableOpacity>
        <View style={styles.registerContainer}>
          <Text style={styles.registerPromptText}>
            {LOGIN_SCREEN.REGISTER_PROMPT_TEXT}
          </Text>
          <TouchableOpacity onPress={onRegister}>
            <Text style={styles.registerLinkText}>
              {LOGIN_SCREEN.REGISTER_LINK_TEXT}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default memo(LoginScreen);
