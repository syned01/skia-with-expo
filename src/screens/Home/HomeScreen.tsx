import React, { FC, memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default memo(Home);
