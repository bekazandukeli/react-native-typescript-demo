import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthorsScreen from './src/screens/AuthorsScreen';
import PostsScreen from './src/screens/PostsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OtherScreen from './src/screens/OtherScreen';
import MaterilIcon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Authors"
        screenOptions={({route}) => ({
          tabBarIcon: ({size}) => (
            <MaterilIcon
              name={`${route.name === 'Authors' ? 'brush' : 'bedtime'}`}
              size={size}
            />
          ),
        })}>
        <Tab.Screen component={AuthorsScreen} name="Authors" />
        <Tab.Screen component={OtherScreen} name="Other" />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
