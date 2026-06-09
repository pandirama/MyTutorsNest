import React, { memo, useCallback, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {
  COMMON,
  COUNTRY_OPTIONS,
  REGISTER_SCREEN,
  USER_TYPE,
  USER_TYPE_OPTIONS,
} from '@/utils/constants';
import commonStyles from '@/styles/commonStyles';
import { useForm } from 'react-hook-form';
import FormInput from '@/components/FormInput';
import FormCheckbox from '@/components/FormCheckbox';
import FormRadioGroup from '@/components/FormRadioGroup';
import { useDispatch } from 'react-redux';
import { setUser } from '@/redux/slices/userSlice';
import { registrationRules } from './validationRules';
import BackHeader from '@/components/BackHeader';
import LogoBanner from '@/components/LogoBanner';
import FormSelect from '@/components/FormSelect';

type Country = {
  _id: string;
  name: string;
};

type FormData = {
  name: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
  termscondition: boolean;
  userType: string;
  country: Country | null;
  subjects: Country[];
};

const countryOptions: Country[] = COUNTRY_OPTIONS;

const RegisterScreen: React.FC = () => {
  const dispatch = useDispatch();

  const [acceptTerms, setAcceptTerms] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      mobile: '',
      password: '',
      confirmPassword: '',
      termscondition: false,
      userType: USER_TYPE.TUTOR,
      country: null,
      subjects: [],
    },
  });

  const onSubmit = useCallback(
    (data: FormData) => {
      dispatch(setUser({ email: data.email }));
    },
    [dispatch],
  );

  const getOptionLabel = useCallback((opt: any) => opt?.name || opt, []);
  const renderOptionLabel = useCallback(
    (opt: any) => (
      <View>
        <Text>{opt.name}</Text>
      </View>
    ),
    [],
  );

  return (
    <View style={commonStyles.container}>
      <BackHeader containerStyle={styles.backHeader} />
      <LogoBanner
        title={REGISTER_SCREEN.TITLE}
        subTitle={REGISTER_SCREEN.SUBTITLE}
      />
      <FormRadioGroup
        control={control as any}
        name="userType"
        options={USER_TYPE_OPTIONS}
        label={COMMON.USER_ROLE_LABEL}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
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
              label={REGISTER_SCREEN.NAME_INPUT_TEXT}
              rules={registrationRules.name}
              returnKeyType="next"
            />
            <FormInput
              control={control as any}
              name="email"
              label={REGISTER_SCREEN.EMAIL_INPUT_TEXT}
              keyboardType="email-address"
              returnKeyType="next"
              rules={registrationRules.email}
            />
            <FormInput
              control={control as any}
              name="mobile"
              label={REGISTER_SCREEN.MOBILE_INPUT_TEXT}
              keyboardType="phone-pad"
              returnKeyType="next"
              isLeftLabel
              leftLabel="+91"
              rules={registrationRules.mobile}
              maxLength={10}
            />
            <FormInput
              control={control as any}
              name="password"
              label={REGISTER_SCREEN.PASSWORD_INPUT_TEXT}
              secureTextEntry
              returnKeyType="next"
              rules={registrationRules.password}
            />
            <FormInput
              control={control as any}
              name="confirmPassword"
              label={REGISTER_SCREEN.CONFIRM_PASSWORD_INPUT_TEXT}
              secureTextEntry
              returnKeyType="next"
              rules={registrationRules.password}
            />
            <FormSelect
              control={control as any}
              placeholder={REGISTER_SCREEN.COUNTRY_PLACEHOLDER}
              optionLoading={false}
              options={countryOptions}
              name="country"
              error={errors.country as any}
              getOptionLabel={getOptionLabel}
              renderOptionLabel={renderOptionLabel}
              optionKey="_id"
            />
            <FormSelect
              control={control as any}
              placeholder={REGISTER_SCREEN.SUBJECTS_PLACEHOLDER}
              multiple
              optionLoading={false}
              options={countryOptions}
              name="subjects"
              error={errors.subjects as any}
              getOptionLabel={getOptionLabel}
              renderOptionLabel={renderOptionLabel}
              optionKey="_id"
            />
            <View style={styles.termsContainer}>
              <FormCheckbox
                control={control as any}
                name="termscondition"
                label={REGISTER_SCREEN.TERMS_TEXT}
                setAcceptTerms={setAcceptTerms}
              />
              <TouchableOpacity
                style={[
                  commonStyles.button,
                  !acceptTerms && commonStyles.disabled,
                ]}
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
