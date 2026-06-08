import React from 'react';
import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import { palette } from '@/theme/palette';
import { Provider } from 'react-redux';
import { persistor, store } from '@/redux/store';
import RootNavigators from '@/navigation/RootNavigator';
import { PersistGate } from 'redux-persist/integration/react';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RootNavigators />
          </PersistGate>
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.white,
  },
});

export default App;
