import React from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  editable?: boolean;
  style?: any;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
}

interface LabelProps {
  children: React.ReactNode;
  style?: any;
}

export function Input({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  editable = true,
  style,
  keyboardType = 'default'
}: InputProps) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      editable={editable}
      keyboardType={keyboardType}
      style={[
        styles.input,
        !editable && styles.inputDisabled,
        style
      ]}
      placeholderTextColor="#9CA3AF"
    />
  );
}

export function Label({ children, style }: LabelProps) {
  return (
    <Text style={[styles.label, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    color: '#111827',
  },
  inputDisabled: {
    backgroundColor: '#F3F4F6',
    color: '#6B7280',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 4,
  },
});