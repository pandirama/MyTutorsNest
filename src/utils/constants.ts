const COMMON = {
  SUBMIT_TEXT: 'Submit',
  USER_ROLE_LABEL: 'I am a',
};

const USER_TYPE = {
  TUTOR: 'tutor',
  STUDENT: 'student',
} as const;

const USER_TYPE_OPTIONS = [
  { label: 'Tutor', value: USER_TYPE.TUTOR },
  { label: 'Student', value: USER_TYPE.STUDENT },
];

const LOGIN_SCREEN = {
  TITLE: 'Good to See You!',
  SUBTITLE: 'Login to continue your learning journey',
  EMAIL_INPUT_TEXT: 'Enter Your Email or Mobile Number',
  PASSWORD_INPUT_TEXT: 'Enter Password',
  FORGOT_PASSWORD_TEXT: 'Forgot Password?',
  REGISTER_PROMPT_TEXT: 'Don’t have account?',
  REGISTER_LINK_TEXT: 'SIGN UP',
};

const REGISTER_SCREEN = {
  TITLE: 'Create Your Account',
  SUBTITLE: 'Join us and start your learning journey',
  NAME_INPUT_TEXT: 'Enter Your Full Name',
  EMAIL_INPUT_TEXT: 'Enter Your Email',
  MOBILE_INPUT_TEXT: 'Enter Your Mobile Number',
  PASSWORD_INPUT_TEXT: 'Enter Your Password',
  CONFIRM_PASSWORD_INPUT_TEXT: 'Enter Your Confirm Password',
  TERMS_TEXT: 'Accept the Terms of use and Privacy policy',
};

const FORGOT_PASSWORD_SCREEN = {
  OLD_INPUT_TEXT: 'Enter Old Password',
  NEW_PASSWORD_INPUT_TEXT: 'Enter New Password',
  RETYPE_PASSWORD_INPUT_TEXT: 'Retype New Password',
};

const HOME_SCREEN = {
  TITLE: 'Home',
  BODY_TEXT: 'Home Screen',
};

export {
  COMMON,
  USER_TYPE,
  USER_TYPE_OPTIONS,
  LOGIN_SCREEN,
  REGISTER_SCREEN,
  FORGOT_PASSWORD_SCREEN,
  HOME_SCREEN,
};
