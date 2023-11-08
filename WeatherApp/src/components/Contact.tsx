import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ContactUs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Us</Text>
      <Text style={styles.subHeading}>Have questions about our application?</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor="#767676"
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor="#767676"
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#767676"
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        placeholderTextColor="#767676"
      />
      <TextInput
        style={styles.messageInput}
        placeholder="Message"
        placeholderTextColor="#767676"
        multiline={true}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B2B2B',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 16,
    color: '#767676',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  input: {
    width: 341,
    height: 54,
    borderRadius: 17,
    backgroundColor: '#D9D9D9',
    paddingLeft: 15,
    marginBottom: 10,
    color: '#767676',
    fontWeight: 'bold',
  },
  messageInput: {
    width: 341,
    height: 128,
    borderRadius: 17,
    backgroundColor: '#D9D9D9',
    paddingLeft: 15,
    paddingTop: 10,
    marginBottom: 20,
    color: '#767676',
    fontWeight: 'bold',
  },
  button: {
    width: 114,
    height: 41,
    borderRadius: 17,
    backgroundColor: '#EDBD11',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default ContactUs;