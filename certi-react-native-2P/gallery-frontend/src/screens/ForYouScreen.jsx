// screens/ForYouScreen.js
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const ForYouScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.memoriesSection}>
        <Text style={styles.sectionTitle}>Memories</Text>
        <TouchableOpacity style={styles.memoryCard}>
          <Image source={{ uri: 'https://static-cse.canva.com/blob/983565/PhotographyAsTherapy14.jpg' }} style={styles.memoryImage} />
          <Text style={styles.memoryText}>Year in Review 2021</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.featuredSection}>
        <Text style={styles.sectionTitle}>Featured Photos</Text>
        <TouchableOpacity style={styles.featuredCard}>
          <Image source={{ uri: 'https://photographylife.com/wp-content/uploads/2017/01/Landscape-photography-example.jpg'} }style={styles.memoryImage} />
          <Text style={styles.featuredText}>Landscape Photography</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  memoriesSection: {
    margin: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  memoryCard: {
    marginBottom: 15,
  },
  memoryImage: {
    width: '100%',
    height: 500,
    borderRadius: 10,
  },
  memoryText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  featuredSection: {
    margin: 20,
  },
  featuredCard: {
    marginBottom: 15,
    },
    featuredText: {
      position: 'absolute',
      bottom: 10,
      left: 10,
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      }
});

export default ForYouScreen;
