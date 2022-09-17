import { FC, memo, useMemo } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
  ViewStyle,
} from 'react-native';

interface PageButtonProps extends TouchableWithoutFeedbackProps {
  emoji: string;
  title: string;
}

const PageButton: FC<PageButtonProps> = ({ emoji, title, style, ...props }) => {
  const containerStyle = useMemo<StyleProp<ViewStyle>>(
    () => [styles.container, style],
    [style],
  );

  return (
    <TouchableWithoutFeedback {...props}>
      <View style={containerStyle}>
        <Text style={styles.emoji}>{emoji}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  emoji: {
    fontSize: 18,
  },
  title: {
    fontSize: 16,
    color: '#373d3f',
    marginLeft: 8,
  },
});

export default memo(PageButton);
