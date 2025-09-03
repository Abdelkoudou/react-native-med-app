import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
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
              <Text className="text-xl font-semibold text-gray-900">Welcome Back</Text>
            </CardTitle>
            <CardDescription>
              <Text className="text-gray-600">Sign in to continue your medical exam preparation</Text>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <View className="space-y-4">
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
                className="w-full"
              >
                {isLoading ? (
                  <View className="flex-row items-center">
                    <ActivityIndicator size="small" color="white" />
                    <Text className="text-white ml-2">Signing in...</Text>
                  </View>
                ) : (
                  'Sign In'
                )}
              </Button>

              <View className="flex-row justify-center">
                <Text className="text-gray-600">Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                  <Text className="text-blue-500 font-medium">Sign up</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Demo Credentials */}
            <View className="mt-6 p-3 bg-gray-50 rounded-md">
              <Text className="text-sm font-medium text-gray-700 mb-2">Demo Credentials:</Text>
              <Text className="text-xs text-gray-600">Email: demo@student.com</Text>
              <Text className="text-xs text-gray-600">Password: demo123</Text>
            </View>
          </CardContent>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}