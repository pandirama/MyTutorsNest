const nameRules = {
  required: 'Full name is required',
  minLength: {
    value: 2,
    message: 'Minimum 2 characters',
  },
  maxLength: {
    value: 50,
    message: 'Maximum 50 characters',
  },
};

const emailRules = {
  required: 'Email is required',
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    message: 'Invalid email address',
  },
};

const passwordRules = {
  required: 'Password is required',
  minLength: {
    value: 6,
    message: 'Minimum 6 characters',
  },
  maxLength: {
    value: 20,
    message: 'Maximum 20 characters',
  },
};

const mobileRules = {
  required: 'Mobile number is required',
  pattern: {
    value: /^[0-9]{10}$/,
    message: 'Invalid mobile number',
  },
};

export const registrationRules = {
  name: nameRules,
  email: emailRules,
  password: passwordRules,
  mobile: mobileRules,
} as const;
