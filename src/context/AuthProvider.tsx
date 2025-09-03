import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing user session
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const savedUser = await AsyncStorage.getItem('medexam-user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (error) {
      console.error('Error loading user:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      // Mock authentication - in real app, this would validate against a backend
      const usersData = await AsyncStorage.getItem('medexam-users');
      const users = usersData ? JSON.parse(usersData) : [];
      const existingUser = users.find((u: any) => u.email === email && u.password === password);

      if (existingUser) {
        const { password: _, ...userWithoutPassword } = existingUser;
        setUser(userWithoutPassword);
        await AsyncStorage.setItem('medexam-user', JSON.stringify(userWithoutPassword));
        setIsLoading(false);
        return true;
      }

      setIsLoading(false);
      return false;
    } catch (error) {
      console.error('Login error:', error);
      setIsLoading(false);
      return false;
    }
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const usersData = await AsyncStorage.getItem('medexam-users');
      const users = usersData ? JSON.parse(usersData) : [];
      
      // Check if user already exists
      const existingUser = users.find((u: any) => u.email === email);
      if (existingUser) {
        setIsLoading(false);
        return false;
      }

      // Create new user
      const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password,
        createdAt: new Date().toISOString(),
      };

      users.push(newUser);
      await AsyncStorage.setItem('medexam-users', JSON.stringify(users));

      const { password: _, ...userWithoutPassword } = newUser;
      setUser(userWithoutPassword);
      await AsyncStorage.setItem('medexam-user', JSON.stringify(userWithoutPassword));

      setIsLoading(false);
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      setIsLoading(false);
      return false;
    }
  };

  const logout = async () => {
    try {
      setUser(null);
      await AsyncStorage.removeItem('medexam-user');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}