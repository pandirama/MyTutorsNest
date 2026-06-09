// Centralised navigation route names. Keep these in sync with the `name`
// prop of every registered <Screen>; referencing ROUTES instead of raw
// strings makes navigate() calls typo-safe and renames a single edit.
export const ROUTES = {
  // Root stack (RootNavigator)
  AUTH: 'AUTH',
  MAIN: 'MAIN',

  // Auth stack (AuthNavigator)
  LOGIN: 'LOGIN',
  SIGNUP: 'SIGNUP',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',

  // Main drawer (MainNavigator)
  HOME: 'HOME',
  PROFILE: 'PROFILE',
  FEEDBACK: 'Feedback',
  PRIVACY_POLICY: 'PrivacyPolicy',
  TERMS_CONDITIONS: 'TermsConditions',
  ABOUT_US: 'AboutUs',

  // Dashboard bottom tabs (DashboardBottomNavigator)
  HOME_STACK: 'HomeStack',
  SUBJECTS_STACK: 'SubjectsStack',
  CHAT_STACK: 'ChatStack',
  PROFILE_STACK: 'ProfileStack',

  // Referenced by MainHeader's notification action, but NOT yet registered
  // in any navigator — navigating here is currently a no-op.
  NOTIFICATIONS: 'NOTIFICATIONS',
} as const;

export type RouteName = (typeof ROUTES)[keyof typeof ROUTES];
