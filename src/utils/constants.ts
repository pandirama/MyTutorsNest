const COMMON = {
  SUBMIT_TEXT: 'Submit',
  USER_ROLE_LABEL: 'I am a',
  DONE_TEXT: 'Done',
  SELECT_PLACEHOLDER: 'Select',
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
  COUNTRY_LABEL: 'Country',
  COUNTRY_PLACEHOLDER: 'Select Your Country',
  SUBJECTS_LABEL: 'Subjects',
  SUBJECTS_PLACEHOLDER: 'Select Subjects',
};

const FORGOT_PASSWORD_SCREEN = {
  OLD_INPUT_TEXT: 'Enter Old Password',
  NEW_PASSWORD_INPUT_TEXT: 'Enter New Password',
  RETYPE_PASSWORD_INPUT_TEXT: 'Retype New Password',
};

const HOME_SCREEN = {
  TITLE: 'My Tutors Nest',
  BODY_TEXT: 'Home Screen',
};

const NETWORK = {
  NO_CONNECTION_TEXT: 'No Internet Connection',
  ANIMATION_DURATION: 300,
};

const DRAWER = {
  SIGN_OUT_TEXT: 'Sign Out',
  APP_VERSION: 'V 1.0.0',
  HOME_LABEL: 'Home',
  FEEDBACK_LABEL: 'FeedBack',
  PRIVACY_POLICY_LABEL: 'Privacy Policy',
  TERMS_CONDITIONS_LABEL: 'Terms & Conditions',
  ABOUT_US_LABEL: 'About Us',
};

// Mock data — replace with a country API response once available.
const COUNTRY_OPTIONS = [
  { _id: 'in', name: 'India' },
  { _id: 'us', name: 'United States' },
  { _id: 'uk', name: 'United Kingdom' },
  { _id: 'ca', name: 'Canada' },
  { _id: 'au', name: 'Australia' },
];

export {
  COMMON,
  USER_TYPE,
  USER_TYPE_OPTIONS,
  LOGIN_SCREEN,
  REGISTER_SCREEN,
  FORGOT_PASSWORD_SCREEN,
  HOME_SCREEN,
  NETWORK,
  DRAWER,
  COUNTRY_OPTIONS,
};
