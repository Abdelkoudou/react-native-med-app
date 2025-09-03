import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../context/AuthProvider';

// Import screens
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import PracticeScreen from '../screens/PracticeScreen';
import ReviewScreen from '../screens/ReviewScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  Practice: { module: string; lesson?: string };
  Review: undefined;
  Analytics: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return null; // You could return a loading screen here
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          // Authenticated screens
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Practice" component={PracticeScreen} />
            <Stack.Screen name="Review" component={ReviewScreen} />
            <Stack.Screen name="Analytics" component={AnalyticsScreen} />
          </>
        ) : (
          // Authentication screens
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}