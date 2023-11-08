import { SafeAreaView, StyleSheet } from 'react-native';
import TabNavigator from './TabNavigator';
import { LIGHT_COLORS } from './src/styles/Colors';
import LoginScreen from './src/screens/views/LoginScreen';
import ContactUs from './src/components/Contact';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './src/screens/views/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login"
       component={LoginScreen}
         options={{
                  headerShown: false,
                }} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} options={{}}/>
      <Stack.Screen name="Home" component={TabNavigator}   
         options={{
              headerShown: false,
                }} />
    </Stack.Navigator>
  </NavigationContainer>


//     <SafeAreaView style={styles.container}>
//       <LoginScreen />

// import { createStackNavigator } from '@react-navigation/stack';

//     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_COLORS.PRIMARY_BACKGROUND_COLOR,
  },
});