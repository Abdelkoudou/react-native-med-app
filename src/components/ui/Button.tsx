import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  disabled?: boolean;
  style?: any;
}

export function Button({ 
  children, 
  onPress, 
  variant = 'default', 
  size = 'default',
  disabled = false,
  style 
}: ButtonProps) {
  const getButtonStyle = () => {
    const baseStyle = [styles.button];
    
    switch (variant) {
      case 'outline':
        baseStyle.push(styles.buttonOutline);
        break;
      case 'ghost':
        baseStyle.push(styles.buttonGhost);
        break;
      default:
        baseStyle.push(styles.buttonDefault);
    }
    
    switch (size) {
      case 'sm':
        baseStyle.push(styles.buttonSm);
        break;
      case 'lg':
        baseStyle.push(styles.buttonLg);
        break;
      case 'icon':
        baseStyle.push(styles.buttonIcon);
        break;
    }
    
    if (disabled) {
      baseStyle.push(styles.buttonDisabled);
    }
    
    return baseStyle;
  };

  const getTextStyle = () => {
    const baseStyle = [styles.buttonText];
    
    switch (variant) {
      case 'outline':
      case 'ghost':
        baseStyle.push(styles.buttonTextSecondary);
        break;
      default:
        baseStyle.push(styles.buttonTextPrimary);
    }
    
    return baseStyle;
  };

  return (
    <TouchableOpacity
      style={[...getButtonStyle(), style]}
      onPress={onPress}
      disabled={disabled}
    >
      {typeof children === 'string' ? (
        <Text style={getTextStyle()}>{children}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonDefault: {
    backgroundColor: '#3B82F6',
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  buttonGhost: {
    backgroundColor: 'transparent',
  },
  buttonSm: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  buttonLg: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  buttonIcon: {
    padding: 8,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  buttonTextPrimary: {
    color: '#FFFFFF',
  },
  buttonTextSecondary: {
    color: '#374151',
  },
});