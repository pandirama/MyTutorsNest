import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import commonStyles from '@/styles/commonStyles';
import { HOME_SCREEN } from '@/utils/constants';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={commonStyles.mainContainer} edges={['right', 'left']}>
      <Text>{HOME_SCREEN.BODY_TEXT}</Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;
