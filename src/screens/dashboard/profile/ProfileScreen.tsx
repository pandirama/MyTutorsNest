import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainHeader from '@/components/MainHeader';
import commonStyles from '@/styles/commonStyles';
import { HOME_SCREEN } from '@/utils/constants';

const ProfileScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={commonStyles.mainContainer} edges={['right', 'left']}>
      <MainHeader title={HOME_SCREEN.TITLE} navigation={navigation} />
      <Text>{HOME_SCREEN.BODY_TEXT}</Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;
