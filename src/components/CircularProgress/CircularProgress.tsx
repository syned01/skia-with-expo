import React, { FC, memo, useCallback, useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { Canvas } from '@shopify/react-native-skia';

import ProgressIndicator from './ProgressIndicator';

interface CircularProgressProps {}

const COUNT = 8;
const DURATION = 80;
const INDICATOR_HEIGHT = 8;
export const RADIUS = 35;
const INNER_RADIUS = 15;
const ACTIVE_COLORS = ['#1C6395', '#319DDA'];
const BACKGROUND_COLOR = '#525b66';

const CircularProgress: FC<CircularProgressProps> = () => {
  const renderIndicator = useCallback<
    (item: number, index: number) => JSX.Element
  >(
    (_, index) => (
      <ProgressIndicator
        key={`indicator-${index}`}
        index={index}
        duration={DURATION}
        indicatorHeight={INDICATOR_HEIGHT}
        radius={RADIUS}
        innerRadius={INNER_RADIUS}
        backgroundColor={BACKGROUND_COLOR}
        activeColors={ACTIVE_COLORS}
        totalItems={COUNT}
      />
    ),
    [],
  );

  const Indicators = useMemo(
    () => new Array(COUNT).fill(0).map(renderIndicator),
    [renderIndicator],
  );

  return <Canvas style={styles.container}>{Indicators}</Canvas>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default memo(CircularProgress);
