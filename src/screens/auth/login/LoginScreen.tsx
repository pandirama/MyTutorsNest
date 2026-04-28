import React, { memo, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { COMMON, LOGIN_SCREEN } from '../../../utils/constants';
import commonStyles from '../../../theme/commonStyles';
import { useForm } from 'react-hook-form';
import { loginRules } from './validationRules';
import FormInput from '../../../components/FormInput';
import FormRadioGroup from '../../../components/FormRadioGroup';
import { useDispatch } from 'react-redux';
import { user } from '../../../redux/slices/userSlice';
import LogoBanner from '../../../components/LogoBanner';

type FormData = {
  email: string;
  password: string;
  termscondition: boolean;
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

const LoginScreen: React.FC = ({ navigation }: any) => {
  const dispatch = useDispatch();

  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
      termscondition: false,
      userType: 'tutor',
    },
  });

  const onSubmit = useCallback(
    (data: FormData) => {
      console.log(data);
      dispatch(user({ email: data.email }));
    },
    [dispatch],
  );

  const onRegister = useCallback(() => {
    navigation.navigate('SIGNUP');
  }, [navigation]);

  const onForgotPassword = useCallback(() => {
    navigation.navigate('SIGNUP');
  }, [navigation]);

  return (
    <View style={commonStyles.container}>
      <LogoBanner />
      <View>
        <FormRadioGroup control={control} name="userType" options={options} label='I am'/>
        <FormInput
          control={control}
          name="email"
          placeholder={LOGIN_SCREEN.EMAIL_INPUT_TEXT}
          rules={loginRules.email}
          keyboardType="email-address"
          returnKeyType="next"
        />
        <FormInput
          control={control}
          name="password"
          placeholder={LOGIN_SCREEN.PASSWORD_INPUT_TEXT}
          secureTextEntry
          returnKeyType="done"
          rules={loginRules.password}
        />
        <TouchableOpacity style={styles.forgotBtn} onPress={onForgotPassword}>
          <Text style={styles.forgotText}>
            {LOGIN_SCREEN.PASSWORD_BTN_TEXT}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[commonStyles.button, styles.submitBtn]}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={commonStyles.buttonText}>{COMMON.SUBMIT_TEXT}</Text>
        </TouchableOpacity>
        <View style={styles.registerView}>
          <Text style={styles.registerUseText}>Don't have account please </Text>
          <TouchableOpacity onPress={onRegister}>
            <Text style={styles.registerText}>register </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default memo(LoginScreen);
