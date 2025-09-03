import React from 'react';
import { TextInput, Text, View } from 'react-native';
import { cn } from '../../utils/cn';

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  editable?: boolean;
  className?: string;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
}

interface LabelProps {
  children: React.ReactNode;
  className?: string;
}

export function Input({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  editable = true,
  className,
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
      className={cn(
        "border border-gray-300 rounded-md px-3 py-2 text-base bg-white text-gray-900",
        !editable && "bg-gray-100 text-gray-500",
        className
      )}
      placeholderTextColor="#9CA3AF"
    />
  );
}

export function Label({ children, className }: LabelProps) {
  return (
    <Text className={cn("text-sm font-medium text-gray-700 mb-1", className)}>
      {children}
    </Text>
  );
}