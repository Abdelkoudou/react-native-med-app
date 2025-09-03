import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useAuth } from '../context/AuthProvider';
import { RootStackParamList } from '../navigation/AppNavigator';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const modules = [
  { name: "Cardiology", icon: "❤️", progress: 75, questions: 120 },
  { name: "Neurology", icon: "🧠", progress: 45, questions: 95 },
  { name: "Pharmacology", icon: "💊", progress: 60, questions: 150 },
  { name: "Internal Medicine", icon: "🩺", progress: 30, questions: 200 },
];

export default function HomeScreen({ navigation }: Props) {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>👤</Text>
            </View>
            <View>
              <Text style={styles.welcomeText}>Welcome back</Text>
              <Text style={styles.userName}>{user?.name}</Text>
            </View>
          </View>
          <Button variant="ghost" size="sm" onPress={handleLogout}>
            <Text style={styles.logoutText}>🚪</Text>
          </Button>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Study Modules</Text>
          <View style={styles.moduleGrid}>
            {modules.map((module, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.moduleCard}
                onPress={() => navigation.navigate('Practice', { module: module.name.toLowerCase() })}
              >
                <Card>
                  <CardContent style={styles.moduleCardContent}>
                    <Text style={styles.moduleIcon}>{module.icon}</Text>
                    <Text style={styles.moduleName}>{module.name}</Text>
                    <Text style={styles.moduleQuestions}>{module.questions} questions</Text>
                    <Text style={styles.moduleProgress}>{module.progress}% complete</Text>
                  </CardContent>
                </Card>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          
          <TouchableOpacity onPress={() => navigation.navigate('Review')}>
            <Card style={styles.actionCard}>
              <CardContent style={styles.actionCardContent}>
                <Text style={styles.actionIcon}>🔄</Text>
                <View style={styles.actionTextContainer}>
                  <Text style={styles.actionTitle}>Review Mistakes</Text>
                  <Text style={styles.actionDescription}>Learn from incorrect answers</Text>
                </View>
              </CardContent>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Analytics')}>
            <Card style={styles.actionCard}>
              <CardContent style={styles.actionCardContent}>
                <Text style={styles.actionIcon}>📊</Text>
                <View style={styles.actionTextContainer}>
                  <Text style={styles.actionTitle}>Performance Analytics</Text>
                  <Text style={styles.actionDescription}>Track your study progress</Text>
                </View>
              </CardContent>
            </Card>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 24,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: '#EBF4FF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 18,
    color: '#3B82F6',
  },
  welcomeText: {
    fontSize: 14,
    color: '#6B7280',
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  logoutText: {
    fontSize: 20,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  moduleGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  moduleCard: {
    width: '48%',
    marginBottom: 16,
  },
  moduleCardContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  moduleIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  moduleName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 4,
  },
  moduleQuestions: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 8,
  },
  moduleProgress: {
    fontSize: 12,
    color: '#3B82F6',
    fontWeight: '500',
  },
  actionCard: {
    marginBottom: 12,
  },
  actionCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  actionIcon: {
    fontSize: 32,
    marginRight: 16,
  },
  actionTextContainer: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  actionDescription: {
    fontSize: 14,
    color: '#6B7280',
  },
});