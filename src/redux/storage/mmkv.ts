import { createMMKV } from 'react-native-mmkv';

export const storage = createMMKV({
  id: 'app-storage',
});

export const secureStorage = createMMKV({
  id: 'secure-storage',
  encryptionKey: 'my-secure-key',
});
