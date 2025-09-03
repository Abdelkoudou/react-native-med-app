import React from 'react';
import { View } from 'react-native';
import { cn } from '../../utils/cn';

interface ProgressProps {
  value: number;
  className?: string;
}

export function Progress({ value, className }: ProgressProps) {
  const progressValue = Math.max(0, Math.min(100, value));
  
  return (
    <View className={cn("bg-gray-200 rounded-full h-2 overflow-hidden", className)}>
      <View 
        className="bg-blue-500 h-full rounded-full"
        style={{ width: `${progressValue}%` }}
      />
    </View>
  );
}