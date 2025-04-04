import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

import type { StackNavigationProp } from '@react-navigation/stack';

// Define the navigation prop type
type LoginScreenProps = {
  navigation: StackNavigationProp<any>;
};

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const handleLogin = () => {
    console.log('User logged in');
    navigation.replace('(tabs)'); // Navigate to the main app
  };

  const handleSignUp = () => {
    console.log('Navigate to Sign Up');
  };

  return (
    <View style={styles.container}>
      {/* Placeholder for Illustration */}
      <View style={styles.illustrationContainer}>
        <Image source={require('@/assets/images/placeholder.png')} style={styles.illustration} />
      </View>
      
      <Text style={styles.welcome}>Welcome to Wasty</Text>
      
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.description}>
          The article states that the numerals used for official purposes should be in the international form of Indian numerals.
        </Text>

        <Button
          title="Continue with Google"
          icon={{ name: 'google', type: 'font-awesome', color: 'black' }}
          buttonStyle={styles.googleButton}
          titleStyle={{ color: 'black' }}
          onPress={() => console.log('Google Login')}
        />

        <Button
          title="Continue Sign up"
          icon={{ name: 'envelope', type: 'font-awesome', color: 'black' }}
          buttonStyle={styles.signupButton}
          titleStyle={{ color: 'black' }}
          onPress={handleSignUp}
        />

        <TouchableOpacity onPress={() => console.log('Navigate to Log In')}>
          <Text style={styles.link}>Already have an account? so Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  illustrationContainer: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    height: 250,
  },
  illustration: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  contentContainer: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    paddingBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
  },
  googleButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    width: '90%',
    marginBottom: 10,
    borderRadius: 30,
  },
  signupButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    width: '90%',
    borderRadius: 30,
  },
  link: {
    fontSize: 16,
    color: '#007BFF',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});
