import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Progress } from '../components/ui/Progress';
import { Badge } from '../components/ui/Badge';
import { useAuth } from '../context/AuthProvider';
import { RootStackParamList } from '../navigation/AppNavigator';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const modules = [
  {
    name: "Cardiology",
    slug: "cardiology",
    icon: "❤️",
    progress: 75,
    questions: 120,
    color: "bg-red-100",
    lessons: [
      { name: "Arrhythmias", progress: 85, questions: 25 },
      { name: "Heart Failure", progress: 70, questions: 30 },
      { name: "Coronary Artery Disease", progress: 60, questions: 35 },
      { name: "Valvular Disease", progress: 80, questions: 30 },
    ],
    analytics: {
      accuracy: 78,
      studyTime: 45,
      streak: 7,
      weakAreas: ["ECG Interpretation", "Drug Interactions"],
    },
  },
  {
    name: "Neurology",
    slug: "neurology",
    icon: "🧠",
    progress: 45,
    questions: 95,
    color: "bg-purple-100",
    lessons: [
      { name: "Stroke", progress: 60, questions: 20 },
      { name: "Epilepsy", progress: 40, questions: 25 },
      { name: "Movement Disorders", progress: 30, questions: 25 },
      { name: "Dementia", progress: 50, questions: 25 },
    ],
    analytics: {
      accuracy: 65,
      studyTime: 32,
      streak: 3,
      weakAreas: ["Neuroanatomy", "Pharmacology"],
    },
  },
  {
    name: "Pharmacology",
    slug: "pharmacology",
    icon: "💊",
    progress: 60,
    questions: 150,
    color: "bg-blue-100",
    lessons: [
      { name: "Cardiovascular Drugs", progress: 75, questions: 40 },
      { name: "Antibiotics", progress: 55, questions: 35 },
      { name: "CNS Drugs", progress: 50, questions: 40 },
      { name: "Endocrine Drugs", progress: 60, questions: 35 },
    ],
    analytics: {
      accuracy: 72,
      studyTime: 38,
      streak: 5,
      weakAreas: ["Drug Interactions", "Side Effects"],
    },
  },
  {
    name: "Internal Medicine",
    slug: "internal-medicine",
    icon: "🩺",
    progress: 30,
    questions: 200,
    color: "bg-green-100",
    lessons: [
      { name: "Diabetes", progress: 40, questions: 50 },
      { name: "Hypertension", progress: 35, questions: 45 },
      { name: "Respiratory Diseases", progress: 25, questions: 55 },
      { name: "GI Disorders", progress: 20, questions: 50 },
    ],
    analytics: {
      accuracy: 58,
      studyTime: 28,
      streak: 2,
      weakAreas: ["Differential Diagnosis", "Treatment Guidelines"],
    },
  },
];

export default function HomeScreen({ navigation }: Props) {
  const { user, logout } = useAuth();
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  const handleLogout = () => {
    logout();
  };

  const selectedModuleData = modules.find((m) => m.slug === selectedModule);

  if (selectedModule && selectedModuleData) {
    return (
      <SafeAreaView className="flex-1 bg-white">
        <ScrollView className="flex-1 p-4">
          <View className="flex-row items-center justify-between mb-6">
            <Button variant="ghost" size="sm" onPress={() => setSelectedModule(null)}>
              <Text>← Back to Modules</Text>
            </Button>
            <Button variant="ghost" size="sm" onPress={handleLogout}>
              <Text>🚪</Text>
            </Button>
          </View>

          <View className="mb-6">
            <View className="flex-row items-center mb-4">
              <View className={`w-12 h-12 rounded-2xl ${selectedModuleData.color} items-center justify-center mr-3`}>
                <Text className="text-2xl">{selectedModuleData.icon}</Text>
              </View>
              <View>
                <Text className="text-2xl font-bold text-gray-900">{selectedModuleData.name}</Text>
                <Text className="text-gray-600">{selectedModuleData.questions} total questions</Text>
              </View>
            </View>

            {/* Module Analytics */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>
                  <Text className="text-lg font-semibold flex-row items-center">
                    📊 Performance Analytics
                  </Text>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <View className="flex-row justify-between mb-4">
                  <View className="items-center">
                    <Text className="text-2xl font-bold text-blue-500">{selectedModuleData.analytics.accuracy}%</Text>
                    <Text className="text-sm text-gray-600">Accuracy</Text>
                  </View>
                  <View className="items-center">
                    <Text className="text-2xl font-bold text-purple-500">{selectedModuleData.analytics.studyTime}h</Text>
                    <Text className="text-sm text-gray-600">Study Time</Text>
                  </View>
                  <View className="items-center">
                    <Text className="text-2xl font-bold text-green-500">{selectedModuleData.analytics.streak}</Text>
                    <Text className="text-sm text-gray-600">Day Streak</Text>
                  </View>
                </View>
                <View>
                  <Text className="text-sm font-medium mb-2 text-gray-700">Areas to Focus:</Text>
                  <View className="flex-row flex-wrap">
                    {selectedModuleData.analytics.weakAreas.map((area, index) => (
                      <Badge key={index} variant="outline" className="mr-2 mb-2">
                        {area}
                      </Badge>
                    ))}
                  </View>
                </View>
              </CardContent>
            </Card>

            {/* Lessons */}
            <View className="mb-6">
              <Text className="text-lg font-semibold mb-3 text-gray-900">Lessons</Text>
              {selectedModuleData.lessons.map((lesson, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.navigate('Practice', { 
                    module: selectedModuleData.slug, 
                    lesson: lesson.name.toLowerCase().replace(/\s+/g, '-') 
                  })}
                >
                  <Card className="mb-3">
                    <CardContent className="p-4">
                      <View className="flex-row items-center justify-between mb-3">
                        <Text className="font-semibold text-gray-900">{lesson.name}</Text>
                        <Button size="sm">
                          Practice
                        </Button>
                      </View>
                      <View className="space-y-2">
                        <View className="flex-row justify-between">
                          <Text className="text-sm text-gray-600">{lesson.questions} questions</Text>
                          <Text className="text-sm text-gray-600">{lesson.progress}% complete</Text>
                        </View>
                        <Progress value={lesson.progress} className="h-2" />
                      </View>
                    </CardContent>
                  </Card>
                </TouchableOpacity>
              ))}
            </View>

            {/* Final Test */}
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-4">
                <View className="flex-row items-center justify-between">
                  <View>
                    <Text className="font-semibold text-blue-700">Final Module Test</Text>
                    <Text className="text-sm text-gray-600">Test yourself on all lessons</Text>
                  </View>
                  <Button>Start Test</Button>
                </View>
              </CardContent>
            </Card>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <View className="p-4">
          <View className="flex-row items-center justify-between mb-6">
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-blue-100 rounded-full items-center justify-center mr-3">
                <Text className="text-blue-500 text-lg">👤</Text>
              </View>
              <View>
                <Text className="text-sm text-gray-600">Welcome back</Text>
                <Text className="font-semibold text-lg text-gray-900">{user?.name}</Text>
              </View>
            </View>
            <Button variant="ghost" size="sm" onPress={handleLogout}>
              <Text>🚪</Text>
            </Button>
          </View>
        </View>

        <View className="px-4">
          <View className="mb-6">
            <Text className="text-xl font-bold text-gray-900 mb-4">Study Modules</Text>
            <View className="flex-row flex-wrap justify-between">
              {modules.map((module) => (
                <TouchableOpacity 
                  key={module.name} 
                  onPress={() => setSelectedModule(module.slug)}
                  className="w-[48%] mb-4"
                >
                  <Card>
                    <CardContent className="p-4">
                      <View className="items-center space-y-3">
                        <View className={`w-12 h-12 rounded-2xl ${module.color} items-center justify-center`}>
                          <Text className="text-2xl">{module.icon}</Text>
                        </View>
                        <View className="items-center">
                          <Text className="font-semibold text-sm text-gray-900">{module.name}</Text>
                          <Text className="text-xs text-gray-600">{module.questions} questions</Text>
                        </View>
                        <View className="w-full space-y-2">
                          <Progress value={module.progress} className="h-1.5" />
                          <Badge variant="secondary" className="self-center">
                            {module.progress}%
                          </Badge>
                        </View>
                      </View>
                    </CardContent>
                  </Card>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View>
            <Text className="text-xl font-bold text-gray-900 mb-4">Quick Actions</Text>
            <View className="space-y-3">
              <TouchableOpacity onPress={() => navigation.navigate('Review')}>
                <Card>
                  <CardContent className="p-4">
                    <View className="flex-row items-center">
                      <View className="w-12 h-12 bg-orange-100 rounded-2xl items-center justify-center mr-4">
                        <Text className="text-2xl">🔄</Text>
                      </View>
                      <View className="flex-1">
                        <Text className="font-semibold text-gray-900">Review Mistakes</Text>
                        <Text className="text-sm text-gray-600">Learn from incorrect answers</Text>
                      </View>
                    </View>
                  </CardContent>
                </Card>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Analytics')}>
                <Card>
                  <CardContent className="p-4">
                    <View className="flex-row items-center">
                      <View className="w-12 h-12 bg-blue-100 rounded-2xl items-center justify-center mr-4">
                        <Text className="text-2xl">📊</Text>
                      </View>
                      <View className="flex-1">
                        <Text className="font-semibold text-gray-900">Performance Analytics</Text>
                        <Text className="text-sm text-gray-600">Track your study progress</Text>
                      </View>
                    </View>
                  </CardContent>
                </Card>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}