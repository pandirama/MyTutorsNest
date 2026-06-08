import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@/screens/auth/login/LoginScreen';
import SignupScreen from '@/screens/auth/register/RegisterScreen';
import ForgotPassword from '@/screens/auth/forgotPassword/ForgotPasswordScreen';
import { ROUTES } from './routes';

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
      <AuthStack.Screen name={ROUTES.SIGNUP} component={SignupScreen} />
      <AuthStack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
