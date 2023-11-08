import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import SettingsScreen from './src/screens/views/SettingsScreen';
import HomePage from './src/components/HomePage/HomePage';
import FavoriteScreen from './src/screens/views/FavoriteScreen';
import CityWeatherDetails from './src/components/CityWeatherDetails/CityWeatherDetails';
import Contact from './src/components/Contact';
import { DARK_COLORS, LIGHT_COLORS } from './src/styles/Colors';
import Onboarding from './src/screens/views/Onboarding';
import SearchWeather from './src/components/Searchweather';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  // Moved to login screen
  // const [fontLoaded, setFontLoaded] = useState(false);
  // const [showSplash, setShowSplash] = useState(true);


  // useEffect(() => {
  //   async function loadFont() {
  //     await Font.loadAsync({
  //       'Noto-Sans': require('./assets/Noto_Sans/NotoSans-Regular.ttf'),
  //     });
  //     setFontLoaded(true);
  //   }
  //   loadFont();

  //   setTimeout(() => setShowSplash(false), 3000);
  // }, []);

  // if (!fontLoaded) {
  //   return null;
  // }

  // if (showSplash) {
  //   // Show the splash screen while loading fonts and assets
  //   return <Onboarding />;
  // }

  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            fontFamily: 'Noto-Sans',
            fontSize: 12,
          },
          tabBarActiveTintColor: LIGHT_COLORS.PRIMARY_COLOR,
          tabBarInactiveTintColor: DARK_COLORS.PRIMARY_TEXT_COLOR,
          tabBarStyle: {
            backgroundColor: DARK_COLORS.SECONDARY_COLOR,
            borderTopWidth: 0,
            borderTopColor: LIGHT_COLORS.SECONDARY_BACKGROUND_COLOR,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require("./assets/home.png")}
                style={{ tintColor: color, width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Details"
          component={CityWeatherDetails}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require("./assets/details.png")}
                style={{ tintColor: color, width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchWeather}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require("./assets/search.png")}
                style={{ tintColor: color, width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoriteScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require("./assets/favorites.png")}
                style={{ tintColor: color, width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require("./assets/settings.png")}
                style={{ tintColor: color, width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require("./assets/contact.png")}
                style={{ tintColor: color, width: 24, height: 24 }}
              />
            ),
          }}
        />
      </Tab.Navigator>
  );
};

export default TabNavigator;