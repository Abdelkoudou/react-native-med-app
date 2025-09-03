import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { RootStackParamList } from '../navigation/AppNavigator';

type ReviewScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Review'>;

interface Props {
  navigation: ReviewScreenNavigationProp;
}

export default function ReviewScreen({ navigation }: Props) {
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
              <Text style={styles.title}>Review Mistakes</Text>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <View style={styles.placeholder}>
              <Text style={styles.emoji}>🔄</Text>
              <Text style={styles.placeholderText}>
                Review functionality will be implemented here.
              </Text>
              <Text style={styles.placeholderSubtext}>
                This will show previously incorrect answers for review and learning.
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
  placeholder: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 16,
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