import { StatusBar } from 'expo-status-bar';
import React, { FC, memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { CircularProgress } from '../../components/CircularProgress';
import { RADIUS } from '../../components/CircularProgress/CircularProgress';

interface LoadingLogosProps {}

const LoadingLogos: FC<LoadingLogosProps> = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" style="light" />
      <View style={styles.circularProgressContainer}>
        <CircularProgress />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  circularProgressContainer: {
    width: RADIUS * 2,
    height: RADIUS * 2,
  },
});

export default memo(LoadingLogos);
