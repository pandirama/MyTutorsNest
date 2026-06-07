import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/login/LoginScreen';
import SignupScreen from '../screens/auth/register/RegisterScreen';
import ForgotPassword from '../screens/auth/forgotpassword/ForgotPassword';

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="LOGIN" component={LoginScreen} />
      <AuthStack.Screen name="SIGNUP" component={SignupScreen} />
      <AuthStack.Screen name="FORGOT_PASSWORD" component={ForgotPassword} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
