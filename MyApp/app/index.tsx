import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/myphoto.jpg')}
        style={styles.image}
      />
      <Text style={styles.name}>"Muhammad Talha"</Text>
      <Text style={styles.description}>
        Hi 👋 I am learning React Native with Expo. 
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // centers vertically
    alignItems: 'center',     // centers horizontally
    backgroundColor: '#c4f0dcff', // light gray background
    padding: 20,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 90,       // makes the photo circular
    marginBottom: 20,
    borderWidth: 4,         // white border
    borderColor: '#16a298ff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,           // shadow for Android
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    lineHeight: 22,
    paddingHorizontal: 20,
  },
});
