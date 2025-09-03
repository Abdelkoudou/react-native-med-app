import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline';
  style?: any;
}

export function Badge({ children, variant = 'default', style }: BadgeProps) {
  return (
    <View style={[styles.badge, styles[variant], style]}>
      <Text style={[styles.badgeText, styles[`${variant}Text`]]}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  default: {
    backgroundColor: '#3B82F6',
  },
  secondary: {
    backgroundColor: '#F3F4F6',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '500',
  },
  defaultText: {
    color: '#FFFFFF',
  },
  secondaryText: {
    color: '#374151',
  },
  outlineText: {
    color: '#374151',
  },
});