import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfessionalProfileScreen = ({ route, navigation }) => {
  const { professional } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={professional.image} style={styles.coverImage} />
      <View style={styles.profileInfo}>
        <Text style={styles.name}>{professional.name}</Text>
        <Text style={styles.profession}>{professional.profession}</Text>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={18} color="#FFD700" />
          <Text style={styles.rating}>{professional.rating}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.sectionContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
          Vivamus hendrerit arcu sed erat molestie vehicula.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Services</Text>
        <View style={styles.serviceList}>
          <Text style={styles.serviceItem}>• Service 1</Text>
          <Text style={styles.serviceItem}>• Service 2</Text>
          <Text style={styles.serviceItem}>• Service 3</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Portfolio</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.portfolioContainer}>
          <Image source={require('../assets/portfolio1.jpg')} style={styles.portfolioImage} />
          <Image source={require('../assets/portfolio2.jpg')} style={styles.portfolioImage} />
          <Image source={require('../assets/portfolio3.jpg')} style={styles.portfolioImage} />
        </ScrollView>
      </View>

      <TouchableOpacity 
        style={styles.bookButton}
        onPress={() => navigation.navigate('BookService', { professional })}
      >
        <Text style={styles.bookButtonText}>Book Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  coverImage: {
    width: '100%',
    height: 200,
  },
  profileInfo: {
    alignItems: 'center',
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  profession: {
    fontSize: 18,
    color: '#666',
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  rating: {
    marginLeft: 5,
    fontSize: 16,
    color: '#333',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  serviceList: {
    marginTop: 10,
  },
  serviceItem: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  portfolioContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  portfolioImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },
  bookButton: {
    backgroundColor: '#007AFF',
    margin: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfessionalProfileScreen;