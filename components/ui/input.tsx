import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TextInputProps,
} from 'react-native';

type InputProps = TextInputProps & {
  rightIcon?: React.ReactNode;
};

export default function Input({ rightIcon, style, ...props }: InputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        placeholderTextColor="#B8B8B8"
        style={[styles.input, style]}
      />
      {rightIcon ? <View style={styles.icon}>{rightIcon}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 52,
    backgroundColor: '#f4f4f4',
    borderRadius: 26,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1A1A1A',
    paddingVertical: 0,
  },
  icon: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});