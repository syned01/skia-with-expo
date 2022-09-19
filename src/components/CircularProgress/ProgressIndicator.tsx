import React, { FC, memo, useEffect } from 'react';
import {
  interpolate,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import {
  Color,
  Group,
  LinearGradient,
  RoundedRect,
  SkiaValue,
  useComputedValue,
  useSharedValueEffect,
  useValue,
} from '@shopify/react-native-skia';

interface ProgressIndicatorProps {
  index: number;
  duration: number;
  totalItems: number;
  indicatorHeight: number;
  radius: number;
  innerRadius: number;
  activeColors: Color[] | SkiaValue<Color[]>;
  backgroundColor: Color;
}

// draw by clock direction
const ProgressIndicator: FC<ProgressIndicatorProps> = ({
  index,
  duration,
  totalItems,
  indicatorHeight,
  radius,
  innerRadius,
  activeColors,
  backgroundColor,
}) => {
  const animatedOpacity = useSharedValue(0);
  const opacity = useValue(0);

  const transform = useComputedValue(() => {
    const rad = -Math.PI / 2 + interpolate(index, [0, 8], [0, 2 * Math.PI]);

    return [{ rotate: rad }];
  }, [index]);

  const startPoints = useComputedValue(() => {
    const rad = transform.current[0].rotate;

    // x = innerRadius * Cos(rad)
    // because of different origin: r + x
    const x = radius + innerRadius * Math.cos(rad);

    // y = innerRadius * Sin(rad)
    // because of different origin: r - y
    const y = radius - indicatorHeight / 2 + innerRadius * Math.sin(rad);

    return { x, y };
  }, [transform, radius, innerRadius, indicatorHeight]);

  const origin = useComputedValue(
    () => ({
      x: startPoints.current.x,
      y: startPoints.current.y + indicatorHeight / 2,
    }),
    [startPoints, indicatorHeight],
  );

  const endGradientCoords = useComputedValue(
    () => ({
      x: startPoints.current.x + (radius - innerRadius),
      y: startPoints.current.y,
    }),
    [startPoints, radius, innerRadius],
  );

  useEffect(() => {
    animatedOpacity.value = withDelay(
      index * duration,
      withSequence(
        withTiming(1, {
          duration: 0,
        }),
        withRepeat(
          withTiming(0, {
            duration: totalItems * duration,
          }),
          -1,
        ),
      ),
    );
  }, [index, animatedOpacity, totalItems, duration]);

  useSharedValueEffect(() => {
    opacity.current = animatedOpacity.value;
  }, animatedOpacity);

  return (
    <Group transform={transform} origin={origin}>
      <RoundedRect
        x={startPoints.current.x}
        y={startPoints.current.y}
        width={radius - innerRadius}
        height={indicatorHeight}
        r={indicatorHeight / 2}
        color={backgroundColor}
      />
      <RoundedRect
        x={startPoints.current.x}
        y={startPoints.current.y}
        width={radius - innerRadius}
        height={indicatorHeight}
        r={indicatorHeight / 2}
        opacity={opacity}>
        <LinearGradient
          start={startPoints}
          end={endGradientCoords}
          colors={activeColors}
        />
      </RoundedRect>
    </Group>
  );
};

export default memo(ProgressIndicator);
