# MedExam Pro - React Native Mobile App

A medical exam preparation app built with React Native and Expo.

## Features

- 📚 Medical study modules (Cardiology, Neurology, Pharmacology, Internal Medicine)
- 📊 Progress tracking and analytics
- 🔄 Review system for mistakes
- 👤 User authentication
- 📱 Mobile-optimized interface

## Tech Stack

- **React Native** with Expo
- **TypeScript** for type safety
- **React Navigation** for navigation
- **NativeWind** for styling (Tailwind CSS for React Native)
- **AsyncStorage** for local data persistence
- **React Hook Form** for form handling

## Prerequisites

Before running this app, make sure you have the following installed:

1. **Node.js** (version 16 or higher)
2. **npm** or **yarn**
3. **Expo CLI** globally installed
4. **Expo Go app** on your mobile device (for testing)

## Step-by-Step Setup Instructions

### 1. Install Node.js and npm
```bash
# Check if Node.js is installed
node --version
npm --version

# If not installed, download from https://nodejs.org/
```

### 2. Install Expo CLI
```bash
npm install -g @expo/cli
```

### 3. Clone and Setup the Project
```bash
# Navigate to the project directory
cd react-native-med-app

# Install dependencies
npm install
```

### 4. Start the Development Server
```bash
# Start Expo development server
npm start
# or
expo start
```

### 5. Run on Mobile Device

#### Option A: Using Expo Go App (Recommended for testing)
1. Download **Expo Go** from App Store (iOS) or Google Play Store (Android)
2. Scan the QR code displayed in your terminal/browser
3. The app will load on your device

#### Option B: Using iOS Simulator (Mac only)
```bash
npm run ios
# or
expo start --ios
```

#### Option C: Using Android Emulator
```bash
npm run android
# or
expo start --android
```

### 6. Building for Production

#### For Android APK:
```bash
expo build:android
```

#### For iOS App Store:
```bash
expo build:ios
```

## Project Structure

```
src/
├── components/
│   └── ui/          # Reusable UI components
├── context/         # React contexts (Auth, etc.)
├── navigation/      # Navigation configuration
├── screens/         # Screen components
└── utils/           # Utility functions

App.tsx              # Main app component
app.json             # Expo configuration
package.json         # Dependencies and scripts
```

## Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run in web browser (experimental)

## Demo Account

For testing purposes, use these credentials:
- **Email**: demo@student.com
- **Password**: demo123

## Features Overview

### Authentication
- User registration and login
- Local storage using AsyncStorage
- Session persistence

### Study Modules
- **Cardiology**: Heart-related medical topics
- **Neurology**: Brain and nervous system topics
- **Pharmacology**: Drug-related questions
- **Internal Medicine**: General medical topics

### Progress Tracking
- Individual lesson progress
- Module completion percentages
- Performance analytics
- Study streaks

## Troubleshooting

### Common Issues

1. **Metro bundler issues**:
   ```bash
   npx react-native start --reset-cache
   ```

2. **Dependency conflicts**:
   ```bash
   rm -rf node_modules
   npm install
   ```

3. **Expo CLI not found**:
   ```bash
   npm install -g @expo/cli
   ```

4. **Android build issues**:
   - Ensure Android Studio is properly installed
   - Check that ANDROID_HOME environment variable is set

5. **iOS build issues** (Mac only):
   - Ensure Xcode is installed and updated
   - Run `expo doctor` to check for issues

## Development Tips

1. **Real-time Testing**: Use Expo Go for instant testing on your device
2. **Hot Reloading**: Changes are automatically reflected in the app
3. **Debugging**: Use React Native Debugger or Flipper for debugging
4. **Performance**: Use React Native Performance Monitor for optimization

## Next Steps for Full Implementation

This is a basic conversion that includes:
- ✅ Authentication system
- ✅ Navigation structure
- ✅ Basic UI components
- ✅ Module overview screens

To complete the app, you would need to implement:
- 📝 MCQ question system
- 📊 Detailed analytics with charts
- 🔄 Mistake review functionality
- 🌐 Backend API integration
- 💾 Enhanced data persistence
- 🎨 Advanced UI/UX improvements

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.