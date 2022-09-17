import { FC, memo } from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home/HomeScreen';
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
    </Stack.Navigator>
  );
};

export default memo(RootNavigator);
