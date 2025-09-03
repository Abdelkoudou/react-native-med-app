import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface AlertProps {
  children: React.ReactNode;
  style?: any;
}

interface AlertDescriptionProps {
  children: React.ReactNode;
  style?: any;
}

export function Alert({ children, style }: AlertProps) {
  return (
    <View style={[styles.alert, style]}>
      {children}
    </View>
  );
}

export function AlertDescription({ children, style }: AlertDescriptionProps) {
  return (
    <Text style={[styles.alertDescription, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  alert: {
    borderWidth: 1,
    borderColor: '#FECACA',
    backgroundColor: '#FEF2F2',
    borderRadius: 6,
    padding: 12,
  },
  alertDescription: {
    fontSize: 14,
    color: '#B91C1C',
  },
});