import React, { memo, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { COMMON, LOGIN_SCREEN } from '../../../utils/constants';
import commonStyles from '../../../theme/commonStyles';
import { useForm } from 'react-hook-form';
import FormInput from '../../../components/FormInput';
import FormCheckbox from '../../../components/FormCheckbox';
import FormRadioGroup from '../../../components/FormRadioGroup';
import { useDispatch } from 'react-redux';
import { user } from '../../../redux/slices/userSlice';
import { registrationRules } from './validationRules';
import BackHeader from '../../../components/BackHeader';
import LogoBanner from '../../../components/LogoBanner';
import { loginRules } from '../login/validationRules';

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

const RegisterScreen: React.FC = () => {
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

  return (
    <View style={commonStyles.container}>
      <BackHeader containerStyle={styles.back} />
      <LogoBanner />
      <View>
        <FormRadioGroup
          control={control as any}
          name="userType"
          options={options}
          label="I am a..."
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
          rules={registrationRules.password}
        />
        <View style={styles.termsContainer}>
          <FormCheckbox
            control={control as any}
            name="termscondition"
            label="terms"
          />
          <TouchableOpacity
            style={commonStyles.button}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={commonStyles.buttonText}>{COMMON.SUBMIT_TEXT}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default memo(RegisterScreen);
