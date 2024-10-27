import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import SplashScreen from './src/screens/SplashScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import LoginScreen from './src/screens/LoginScreen';
import PersonalizeScreen from './src/screens/PersonalizeScreen';
import HomeScreen from './src/screens/HomeScreen';
import BrowseProfessionalsScreen from './src/screens/BrowseProfessionalsScreen';
import ProfessionalProfileScreen from './src/screens/ProfessionalProfileScreen';
import BookServiceScreen from './src/screens/BookServiceScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import LifestyleHubScreen from './src/screens/LifestyleHubScreen';
import ArticleScreen from './src/screens/ArticleScreen';
import UserProfileScreen from './src/screens/UserProfileScreen';
import MyBookingsScreen from './src/screens/MyBookingsScreen';
import SavedProfessionalsScreen from './src/screens/SavedProfessionalsScreen';
import WalletScreen from './src/screens/WalletScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Browse') {
          iconName = focused ? 'search' : 'search-outline';
        } else if (route.name === 'Lifestyle') {
          iconName = focused ? 'book' : 'book-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Browse" component={BrowseProfessionalsScreen} />
    <Tab.Screen name="Lifestyle" component={LifestyleHubScreen} />
    <Tab.Screen name="Profile" component={UserProfileScreen} />
  </Tab.Navigator>
);


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Personalize" component={PersonalizeScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="ProfessionalProfile" component={ProfessionalProfileScreen} />
        <Stack.Screen name="BookService" component={BookServiceScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Article" component={ArticleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;