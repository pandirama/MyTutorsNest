import React, { memo, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { COMMON, LOGIN_SCREEN } from '../../../utils/constants';
import commonStyles from '../../../theme/commonStyles';
import { useForm } from 'react-hook-form';
import FormInput from '../../../components/FormInput';
import FormRadioGroup from '../../../components/FormRadioGroup';
import { useDispatch } from 'react-redux';
import { user } from '../../../redux/slices/userSlice';
import LogoBanner from '../../../components/LogoBanner';
import { loginRules } from './validationRules';

type FormData = {
  email: string;
  password: string;
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

  const { control, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
      userType: 'tutor',
    },
  });

  const onSubmit = useCallback(
    (data: FormData) => {
      console.log(data);
      navigation.navigate('MAIN');
      dispatch(user({ email: data.email }));
    },
    [dispatch, navigation],
  );

  const onRegister = useCallback(() => {
    reset();
    navigation.navigate('SIGNUP');
  }, [reset, navigation]);

  const onForgotPassword = useCallback(() => {
    reset();
    navigation.navigate('FORGOT_PASSWORD');
  }, [reset, navigation]);

  return (
    <View style={commonStyles.container}>
      <LogoBanner
        title="Good to See You!"
        subTitle="Login to continue your learning journey"
      />
      <View>
        <FormRadioGroup
          control={control as any}
          name="userType"
          options={options}
          label="I am a"
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
        <TouchableOpacity style={styles.forgotBtn} onPress={onForgotPassword}>
          <Text style={styles.forgotText}>
            {LOGIN_SCREEN.PASSWORD_BTN_TEXT}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[commonStyles.button, styles.submitBtn]}
          // onPress={handleSubmit(onSubmit)}
          onPress={() =>
            navigation.navigate('MAIN', {
              screen: 'Home',
              
            })
          }
        >
          <Text style={commonStyles.buttonText}>{COMMON.SUBMIT_TEXT}</Text>
        </TouchableOpacity>
        <View style={styles.registerView}>
          <Text style={styles.registerUseText}>Don’t have account?</Text>
          <TouchableOpacity onPress={onRegister}>
            <Text style={styles.registerText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default memo(LoginScreen);
