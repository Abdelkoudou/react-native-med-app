import React from 'react';
import { View, Text } from 'react-native';
import { cn } from '../../utils/cn';

interface AlertProps {
  children: React.ReactNode;
  className?: string;
}

interface AlertDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function Alert({ children, className }: AlertProps) {
  return (
    <View className={cn(
      "border border-red-200 bg-red-50 rounded-md p-3",
      className
    )}>
      {children}
    </View>
  );
}

export function AlertDescription({ children, className }: AlertDescriptionProps) {
  return (
    <Text className={cn("text-sm text-red-700", className)}>
      {children}
    </Text>
  );
}