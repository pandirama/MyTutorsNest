import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import commonStyles from '../../../theme/commonStyles';
import MainHeader from '../../../components/MainHeader';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={commonStyles.mainContainer} edges={['right', 'left']}>
      <MainHeader title="Home" navigation={navigation} />
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
