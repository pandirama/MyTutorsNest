import React, { memo, useCallback, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import styles from './styles';
import { COMMON } from '../../../utils/constants';
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

type FormData = {
  name: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
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

  const [acceptTerms, setAcceptTerms] = useState(false);

  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      mobile: '',
      password: '',
      confirmPassword: '',
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
      <LogoBanner
        title="Create Your Account"
        subTitle="Join us and start your learning journey"
      />
      <FormRadioGroup
        control={control as any}
        name="userType"
        options={options}
        label="I am a"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <KeyboardAvoidingView
          behavior={'padding'}
          keyboardVerticalOffset={-45}
          style={styles.content}
        >
          <View>
            <FormInput
              control={control as any}
              name="name"
              label={"Enter Your Full Name"}
              rules={registrationRules.name}
              returnKeyType="next"
            />
            <FormInput
              control={control as any}
              name="email"
              label={"Enter Your Email"}
              keyboardType="email-address"
              returnKeyType="next"
              rules={registrationRules.email}
            />
            <FormInput
              control={control as any}
              name="mobile"
              label={"Enter Your Mobile Number"}
              keyboardType="phone-pad"
              returnKeyType="next"
              rules={registrationRules.mobile}
            />
            <FormInput
              control={control as any}
              name="password"
              label={"Enter Your Password"}
              secureTextEntry
              returnKeyType="next"
              rules={registrationRules.password}
            />
            <FormInput
              control={control as any}
              name="confirmPassword"
              label={"Enter Your Confirm Password"}
              secureTextEntry
              returnKeyType="next"
              rules={registrationRules.password}
            />
            <View style={styles.termsContainer}>
              <FormCheckbox
                control={control as any}
                name="termscondition"
                label="Accept the Terms of use and Privacy policy"
                setAcceptTerms={setAcceptTerms}
              />
              <TouchableOpacity
                style={[commonStyles.button, !acceptTerms && commonStyles.disabled]}
                onPress={handleSubmit(onSubmit)}
                disabled={!acceptTerms}
              >
                <Text style={commonStyles.buttonText}>
                  {COMMON.SUBMIT_TEXT}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default memo(RegisterScreen);
