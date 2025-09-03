import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ProgressProps {
  value: number;
  style?: any;
}

export function Progress({ value, style }: ProgressProps) {
  const progressValue = Math.max(0, Math.min(100, value));
  
  return (
    <View style={[styles.progressContainer, style]}>
      <View 
        style={[styles.progressBar, { width: `${progressValue}%` }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  progressContainer: {
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    height: 8,
    overflow: 'hidden',
  },
  progressBar: {
    backgroundColor: '#3B82F6',
    height: '100%',
    borderRadius: 4,
  },
});