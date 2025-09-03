import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input, Label } from '../components/ui/Input';
import { Alert, AlertDescription } from '../components/ui/Alert';
import { useAuth } from '../context/AuthProvider';
import { RootStackParamList } from '../navigation/AppNavigator';

type SignupScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Signup'>;

interface Props {
  navigation: SignupScreenNavigationProp;
}

export default function SignupScreen({ navigation }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { signup, isLoading } = useAuth();

  const handleSubmit = async () => {
    setError('');

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    const success = await signup(name, email, password);
    if (!success) {
      setError('An account with this email already exists');
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
              <Text style={styles.title}>Create Account</Text>
            </CardTitle>
            <CardDescription>
              <Text style={styles.description}>Join thousands of medical students preparing for exams</Text>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <View style={styles.formContainer}>
              <View style={styles.inputGroup}>
                <Label>Full Name</Label>
                <Input
                  value={name}
                  onChangeText={setName}
                  placeholder="Enter your full name"
                  editable={!isLoading}
                />
              </View>

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
                  placeholder="Create a strong password"
                  secureTextEntry
                  editable={!isLoading}
                />
              </View>

              <View style={styles.inputGroup}>
                <Label>Confirm Password</Label>
                <Input
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  placeholder="Confirm your password"
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
                    <Text style={styles.loadingText}>Creating account...</Text>
                  </View>
                ) : (
                  'Create Account'
                )}
              </Button>

              <View style={styles.linkContainer}>
                <Text style={styles.linkText}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.linkButton}>Sign in</Text>
                </TouchableOpacity>
              </View>
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
});