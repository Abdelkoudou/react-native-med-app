import React from 'react';
import { View, Text } from 'react-native';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variantStyles = {
    default: "bg-blue-500 text-white",
    secondary: "bg-gray-100 text-gray-700",
    outline: "border border-gray-300 bg-transparent text-gray-700"
  };

  return (
    <View className={cn(
      "px-2 py-1 rounded-full",
      variantStyles[variant],
      className
    )}>
      <Text className="text-xs font-medium text-inherit">
        {children}
      </Text>
    </View>
  );
}