import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthorsScreen from './src/screens/AuthorsScreen';
import PostsScreen from './src/screens/PostsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={AuthorsScreen} name="Authors" />
        <Stack.Screen component={PostsScreen} name="Posts" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
