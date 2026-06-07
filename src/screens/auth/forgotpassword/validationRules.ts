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

export const loginRules = {
  email: emailRules,
  password: passwordRules,
} as const;
