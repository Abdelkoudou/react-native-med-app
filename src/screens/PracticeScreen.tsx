import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { RootStackParamList } from '../navigation/AppNavigator';

type PracticeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Practice'>;
type PracticeScreenRouteProp = RouteProp<RootStackParamList, 'Practice'>;

interface Props {
  navigation: PracticeScreenNavigationProp;
  route: PracticeScreenRouteProp;
}

export default function PracticeScreen({ navigation, route }: Props) {
  const { module, lesson } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Button variant="ghost" size="sm" onPress={() => navigation.goBack()}>
            <Text>← Back</Text>
          </Button>
        </View>

        <Card>
          <CardHeader>
            <CardTitle>
              <Text style={styles.title}>Practice Session</Text>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Text style={styles.moduleText}>Module: {module}</Text>
            {lesson && <Text style={styles.moduleText}>Lesson: {lesson}</Text>}
            
            <View style={styles.placeholder}>
              <Text style={styles.placeholderText}>
                Practice functionality will be implemented here.
              </Text>
              <Text style={styles.placeholderSubtext}>
                This will include MCQ questions, progress tracking, and scoring.
              </Text>
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
  scrollView: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  moduleText: {
    color: '#6B7280',
    marginBottom: 16,
  },
  placeholder: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  placeholderText: {
    fontSize: 18,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 16,
  },
  placeholderSubtext: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
  },
});