import React from 'react';
import { View, ViewStyle } from 'react-native';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <View className={cn("bg-white rounded-lg border border-gray-200 shadow-sm", className)}>
      {children}
    </View>
  );
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <View className={cn("p-4 pb-2", className)}>
      {children}
    </View>
  );
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <View className={cn("p-4 pt-0", className)}>
      {children}
    </View>
  );
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <View className={cn("text-lg font-semibold text-gray-900", className)}>
      {children}
    </View>
  );
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <View className={cn("text-sm text-gray-600", className)}>
      {children}
    </View>
  );
}