import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LibraryScreen from '../screens/LibraryScreen';
import ForYouScreen from '../screens/ForYouScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import SearchScreen from '../screens/SearchScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Library') {
              iconName = focused ? 'images' : 'images-outline';
            } else if (route.name === 'For You') {
              iconName = focused ? 'star' : 'star-outline';
            } else if (route.name === 'Albums') {
              iconName = focused ? 'albums' : 'albums-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Library" component={LibraryScreen} />
        <Tab.Screen name="For You" component={ForYouScreen} />
        <Tab.Screen name="Albums" component={AlbumsScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
  );
};

export default App;
