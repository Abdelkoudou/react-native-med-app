import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CardProps {
  children: React.ReactNode;
  style?: any;
}

interface CardHeaderProps {
  children: React.ReactNode;
  style?: any;
}

interface CardContentProps {
  children: React.ReactNode;
  style?: any;
}

interface CardTitleProps {
  children: React.ReactNode;
  style?: any;
}

interface CardDescriptionProps {
  children: React.ReactNode;
  style?: any;
}

export function Card({ children, style }: CardProps) {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
}

export function CardHeader({ children, style }: CardHeaderProps) {
  return (
    <View style={[styles.cardHeader, style]}>
      {children}
    </View>
  );
}

export function CardContent({ children, style }: CardContentProps) {
  return (
    <View style={[styles.cardContent, style]}>
      {children}
    </View>
  );
}

export function CardTitle({ children, style }: CardTitleProps) {
  return (
    <View style={[style]}>
      {typeof children === 'string' ? (
        <Text style={styles.cardTitle}>{children}</Text>
      ) : (
        children
      )}
    </View>
  );
}

export function CardDescription({ children, style }: CardDescriptionProps) {
  return (
    <View style={[style]}>
      {typeof children === 'string' ? (
        <Text style={styles.cardDescription}>{children}</Text>
      ) : (
        children
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardHeader: {
    padding: 16,
    paddingBottom: 8,
  },
  cardContent: {
    padding: 16,
    paddingTop: 0,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  cardDescription: {
    fontSize: 14,
    color: '#6B7280',
  },
});