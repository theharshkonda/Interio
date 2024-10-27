import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BrowseProfessionalsScreen = ({ navigation }) => {
  const professionals = [
    { id: '1', name: 'John Doe', profession: 'Event Planner', rating: 4.8, image: require('../assets/professional1.jpg') },
    { id: '2', name: 'Jane Smith', profession: 'Web Designer', rating: 4.9, image: require('../assets/professional2.jpg') },
    { id: '3', name: 'Mike Johnson', profession: 'Makeup Artist', rating: 4.7, image: require('../assets/professional3.jpg') },
    // Add more professionals
  ];

  const renderProfessionalItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.professionalCard}
      onPress={() => navigation.navigate('ProfessionalProfile', { professional: item })}
    >
      <Image source={item.image} style={styles.professionalImage} />
      <View style={styles.professionalInfo}>
        <Text style={styles.professionalName}>{item.name}</Text>
        <Text style={styles.professionalProfession}>{item.profession}</Text>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Browse Professionals</Text>
      <FlatList
        data={professionals}
        renderItem={renderProfessionalItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  professionalCard: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
  },
  professionalImage: {
    width: 100,
    height: 100,
  },
  professionalInfo: {
    flex: 1,
    padding: 15,
  },
  professionalName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  professionalProfession: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#333',
  },
});

export default BrowseProfessionalsScreen;