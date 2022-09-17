import React, { FC, memo, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { PageButton } from '../../components/PageButton';
import { NavigationKeys } from '../../navigation/keys';
import { RootStackScreenProps } from '../../navigation/types';

interface HomeProps {}

type HomeStackProps = RootStackScreenProps<NavigationKeys.Home>;

const Home: FC<HomeProps> = () => {
  const { navigate } = useNavigation<HomeStackProps['navigation']>();

  const goToLoadingLogos = useCallback(() => {
    navigate(NavigationKeys.LoadingLogos);
  }, [navigate]);

  return (
    <View style={styles.container}>
      <PageButton emoji="👓" title="Loading logos" onPress={goToLoadingLogos} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default memo(Home);
