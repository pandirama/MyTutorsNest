import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/login/LoginScreen';
import SignupScreen from '../screens/auth/register/RegisterScreen';

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="LOGIN" component={LoginScreen} />
      <AuthStack.Screen name="SIGNUP" component={SignupScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
