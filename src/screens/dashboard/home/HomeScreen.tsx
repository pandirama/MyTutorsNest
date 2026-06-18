import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import commonStyles from '@/styles/commonStyles';
import MainHeader from '@/components/MainHeader';
import { HOME_SCREEN, TAB_TITLES } from '@/utils/constants';

const HomeScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  return (
    <SafeAreaView style={commonStyles.mainContainer} edges={['right', 'left']}>
      <MainHeader
        title={TAB_TITLES[route?.name] ?? HOME_SCREEN.TITLE}
        navigation={navigation}
      />
      <Text>{HOME_SCREEN.BODY_TEXT}</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
