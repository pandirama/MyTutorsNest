const loginRules = {
  email: {
    required: 'Email is required',
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Invalid email address',
    },
  },

  password: {
    required: 'Password is required',
    minLength: {
      value: 6,
      message: 'Minimum 6 characters',
    },
    maxLength: {
      value: 20,
      message: 'Maximum 20 characters',
    },
  },
};
export { loginRules };
