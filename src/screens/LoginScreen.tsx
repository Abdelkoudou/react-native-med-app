import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input, Label } from '../components/ui/Input';
import { Alert, AlertDescription } from '../components/ui/Alert';
import { useAuth } from '../context/AuthProvider';
import { RootStackParamList } from '../navigation/AppNavigator';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();

  const handleSubmit = async () => {
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    const success = await login(email, password);
    if (!success) {
      setError('Invalid email or password');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logoIcon}>
            <Text style={styles.logoEmoji}>📚</Text>
          </View>
          <Text style={styles.logoText}>MedExam Pro</Text>
        </View>

        <Card style={styles.card}>
          <CardHeader style={styles.centerText}>
            <CardTitle>
              <Text style={styles.title}>Welcome Back</Text>
            </CardTitle>
            <CardDescription>
              <Text style={styles.description}>Sign in to continue your medical exam preparation</Text>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <View style={styles.formContainer}>
              <View style={styles.inputGroup}>
                <Label>Email</Label>
                <Input
                  value={email}
                  onChangeText={setEmail}
                  placeholder="student@example.com"
                  keyboardType="email-address"
                  editable={!isLoading}
                />
              </View>

              <View style={styles.inputGroup}>
                <Label>Password</Label>
                <Input
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Enter your password"
                  secureTextEntry
                  editable={!isLoading}
                />
              </View>

              {error && (
                <Alert>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button 
                onPress={handleSubmit}
                disabled={isLoading}
                style={styles.submitButton}
              >
                {isLoading ? (
                  <View style={styles.loadingContainer}>
                    <ActivityIndicator size="small" color="white" />
                    <Text style={styles.loadingText}>Signing in...</Text>
                  </View>
                ) : (
                  'Sign In'
                )}
              </Button>

              <View style={styles.linkContainer}>
                <Text style={styles.linkText}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                  <Text style={styles.linkButton}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Demo Credentials */}
            <View style={styles.demoContainer}>
              <Text style={styles.demoTitle}>Demo Credentials:</Text>
              <Text style={styles.demoCredential}>Email: demo@student.com</Text>
              <Text style={styles.demoCredential}>Password: demo123</Text>
            </View>
          </CardContent>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logoIcon: {
    width: 64,
    height: 64,
    backgroundColor: '#3B82F6',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  logoEmoji: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  card: {
    marginBottom: 24,
  },
  centerText: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
  },
  description: {
    color: '#6B7280',
  },
  formContainer: {
    gap: 16,
  },
  inputGroup: {
    gap: 4,
  },
  submitButton: {
    width: '100%',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loadingText: {
    color: '#FFFFFF',
    marginLeft: 8,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  linkText: {
    color: '#6B7280',
  },
  linkButton: {
    color: '#3B82F6',
    fontWeight: '500',
  },
  demoContainer: {
    marginTop: 24,
    padding: 12,
    backgroundColor: '#F9FAFB',
    borderRadius: 6,
  },
  demoTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 8,
  },
  demoCredential: {
    fontSize: 12,
    color: '#6B7280',
  },
});