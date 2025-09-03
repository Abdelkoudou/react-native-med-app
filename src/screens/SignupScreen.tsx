import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
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
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 16 }}>
        {/* Logo */}
        <View className="items-center mb-8">
          <View className="w-16 h-16 bg-blue-500 rounded-2xl items-center justify-center mb-4">
            <Text className="text-white text-2xl font-bold">📚</Text>
          </View>
          <Text className="text-2xl font-bold text-gray-900">MedExam Pro</Text>
        </View>

        <Card className="mb-6">
          <CardHeader className="text-center">
            <CardTitle>
              <Text className="text-xl font-semibold text-gray-900">Create Account</Text>
            </CardTitle>
            <CardDescription>
              <Text className="text-gray-600">Join thousands of medical students preparing for exams</Text>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <View className="space-y-4">
              <View>
                <Label>Full Name</Label>
                <Input
                  value={name}
                  onChangeText={setName}
                  placeholder="Enter your full name"
                  editable={!isLoading}
                />
              </View>

              <View>
                <Label>Email</Label>
                <Input
                  value={email}
                  onChangeText={setEmail}
                  placeholder="student@example.com"
                  keyboardType="email-address"
                  editable={!isLoading}
                />
              </View>

              <View>
                <Label>Password</Label>
                <Input
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Create a strong password"
                  secureTextEntry
                  editable={!isLoading}
                />
              </View>

              <View>
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
                className="w-full"
              >
                {isLoading ? (
                  <View className="flex-row items-center">
                    <ActivityIndicator size="small" color="white" />
                    <Text className="text-white ml-2">Creating account...</Text>
                  </View>
                ) : (
                  'Create Account'
                )}
              </Button>

              <View className="flex-row justify-center">
                <Text className="text-gray-600">Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text className="text-blue-500 font-medium">Sign in</Text>
                </TouchableOpacity>
              </View>
            </View>
          </CardContent>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}