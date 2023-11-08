import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import Onboarding from './Onboarding';
import { userLogin } from '../controllers/AuthenticationController';

const LoginScreen = ({ 
     navigation
 }) => {

  const [showSplash, setShowSplash] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');




  const handleLogin = () => {

    userLogin(email, password).then(result=>{
      if (result.result === true) {
        navigation.navigate("Home");
      } else {
        const error = 'Invalid credentials. Please try again.';
        Alert.alert(error);
      }
    }).catch(e=>{
      console.error(e);
      Alert.alert("Unexpected error");
    });
  };


  if (showSplash) {
    // Show the splash screen while loading fonts and assets
    return <Onboarding />;
  }
  
  const handleSignUp = () => {
    console.log("Signing up");
    navigation.push("Sign Up");
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/login.png')} 
        style={styles.logo}
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#767676"
          onChangeText={text => setEmail(text)}
          value={email}
          autoCapitalize="none"
          style={styles.input}
        />
        <TextInput
          autoCapitalize="none"
          placeholder="Password"
          placeholderTextColor="#767676"
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signupText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B2B2B'
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  inputContainer: {
    width: '80%',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    color: '#fff',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#EDBD11',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#000',
    fontSize: 16,
  },
  signupText: {
    marginTop: 20,
    color: '#fff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;