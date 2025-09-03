import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { RootStackParamList } from '../navigation/AppNavigator';

type AnalyticsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Analytics'>;

interface Props {
  navigation: AnalyticsScreenNavigationProp;
}

export default function AnalyticsScreen({ navigation }: Props) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 p-4">
        <View className="flex-row items-center justify-between mb-6">
          <Button variant="ghost" size="sm" onPress={() => navigation.goBack()}>
            <Text>← Back</Text>
          </Button>
        </View>

        <Card>
          <CardHeader>
            <CardTitle>
              <Text className="text-xl font-bold text-gray-900">Performance Analytics</Text>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <View className="items-center py-8">
              <Text className="text-6xl mb-4">📊</Text>
              <Text className="text-lg text-gray-600 text-center mb-4">
                Analytics functionality will be implemented here.
              </Text>
              <Text className="text-sm text-gray-500 text-center">
                This will show detailed performance metrics, charts, and progress over time.
              </Text>
            </View>
          </CardContent>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}