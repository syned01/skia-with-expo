import { FC, memo } from 'react';
import { StyleSheet, View } from 'react-native';

interface LoadingLogosProps {}

const LoadingLogos: FC<LoadingLogosProps> = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
});

export default memo(LoadingLogos);
