import { FC, memo } from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { HomeScreen } from '../screens/HomeScreen';
import { LoadingLogos } from '../screens/LoadingLogos';
import { NavigationKeys } from './keys';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const defaultScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  contentStyle: {
    backgroundColor: '#fff',
  },
};

const RootNavigator: FC = () => {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name={NavigationKeys.Home} component={HomeScreen} />
      <Stack.Screen
        name={NavigationKeys.LoadingLogos}
        component={LoadingLogos}
      />
    </Stack.Navigator>
  );
};

export default memo(RootNavigator);
