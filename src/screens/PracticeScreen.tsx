import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
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
              <Text className="text-xl font-bold text-gray-900">Practice Session</Text>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Text className="text-gray-600 mb-4">Module: {module}</Text>
            {lesson && <Text className="text-gray-600 mb-4">Lesson: {lesson}</Text>}
            
            <View className="items-center py-8">
              <Text className="text-lg text-gray-600 text-center mb-4">
                Practice functionality will be implemented here.
              </Text>
              <Text className="text-sm text-gray-500 text-center">
                This will include MCQ questions, progress tracking, and scoring.
              </Text>
            </View>
          </CardContent>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}