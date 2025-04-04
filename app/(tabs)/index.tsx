import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { makeRedirectUri } from 'expo-auth-session';
import { StackNavigationProp } from '@react-navigation/stack';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

WebBrowser.maybeCompleteAuthSession();

type LoginScreenProps = {
  navigation: StackNavigationProp<any>;
};

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: Platform.OS === 'ios'
      ? 'YOUR_IOS_CLIENT_ID.apps.googleusercontent.com'
      : 'YOUR_ANDROID_CLIENT_ID.apps.googleusercontent.com',
    webClientId: 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
    redirectUri: makeRedirectUri({ useProxy: true }),
  });

  useEffect(() => {
    if (response?.type === 'success') {
      console.log('Google Auth Response:', response);
      navigation.replace('(tabs)'); // Navigate to main app
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <View style={styles.illustrationContainer}>
        <Text style={styles.welcome}>Welcome to Wasty</Text>
        <Image source={require('@/assets/images/placeholder.png')} style={styles.illustration} />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.description}>
          The article states that the numerals used for official purposes should be in the international form of Indian numerals.
        </Text>

        <Button
          title="Continue with Google"
          icon={{
            name: 'google',
            type: 'font-awesome',
            color: 'black',
            size: 20,
          }}
          iconContainerStyle={{ marginRight: 10 }}
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
          onPress={() => promptAsync()}
          disabled={!request}
        />

        <Button
          title="Continue Sign up"
          icon={{
            name: 'envelope',
            type: 'font-awesome',
            color: 'black',
            size: 20,
          }}
          iconContainerStyle={{ marginRight: 10 }}
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
          onPress={() => console.log('Sign Up')}
        />

        <TouchableOpacity onPress={() => console.log('Navigate to Log In')}>
          <Text style={styles.link}>Already have an account? Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    width: screenWidth,
  },
  illustrationContainer: {
    alignItems: 'center',
    width: screenWidth,
    height: 500,
    justifyContent: 'flex-end',
  },
  illustration: {
    width: screenWidth,
    height: '100%',
    resizeMode: 'cover',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    top: 50,
    fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif',
    letterSpacing: 2,
    zIndex: 4,
  },
  contentContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 300,
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
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    width: '90%',
    marginBottom: 10,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 40,
  },
  link: {
    fontSize: 16,
    color: '#007BFF',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});
