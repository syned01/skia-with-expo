import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { NavigationKeys } from './keys';

export type RootStackParamList = {
  [NavigationKeys.Home]: undefined;
  [NavigationKeys.LoadingLogos]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
