import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  const popularCategories = [
    { name: 'Event Planning', icon: 'calendar' },
    { name: 'Web Design', icon: 'laptop' },
    { name: 'Branding', icon: 'color-palette' },
    { name: 'Marketing', icon: 'megaphone' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome to Clarity</Text>
      </View>

      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#666" />
        <Text style={styles.searchText}>Search for a service provider</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>For You</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.recommendationCard}>
            <Image source={require('../assets/event-planner.jpg')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>Event Planners</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.recommendationCard}>
            <Image source={require('../assets/web-designer.jpg')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>Web Designers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.recommendationCard}>
            <Image source={require('../assets/makeup-artist.jpg')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>Makeup Artists</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Categories</Text>
        <View style={styles.categoriesGrid}>
          {popularCategories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryCard}>
              <Icon name={category.icon} size={40} color="#007AFF" />
              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>New on Clarity</Text>
        <View style={styles.newFeature}>
          <Icon name="star" size={30} color="#FFD700" />
          <View style={styles.newFeatureText}>
            <Text style={styles.newFeatureTitle}>Hiring an Event Manager?</Text>
            <Text style={styles.newFeatureDescription}>We have some great recommendations for you.</Text>
          </View>
          <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllButtonText}>See all</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    margin: 20,
    padding: 10,
    borderRadius: 10,
  },
  searchText: {
    marginLeft: 10,
    color: '#666',
    fontSize: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
    color: '#333',
  },
  recommendationCard: {
    width: 200,
    marginLeft: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    width: '100%',
    height: 120,
  },
  cardTitle: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  categoryCard: {
    width: '45%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    marginBottom: 20,
  },
  categoryName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  newFeature: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    margin: 20,
    padding: 15,
    borderRadius: 10,
  },
  newFeatureText: {
    flex: 1,
    marginLeft: 15,
  },
  newFeatureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  newFeatureDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  seeAllButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  seeAllButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;