import { FC, memo } from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { HomeScreen } from '../screens/HomeScreen';
import { LoadingIconsScreen } from '../screens/LoadingIconsScreen';
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
        name={NavigationKeys.LoadingIcons}
        component={LoadingIconsScreen}
      />
    </Stack.Navigator>
  );
};

export default memo(RootNavigator);
