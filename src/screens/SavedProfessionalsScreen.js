import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SavedProfessionalsScreen = ({ navigation }) => {
  const savedProfessionals = [
    { id: '1', name: 'Jane Smith', profession: 'Web Designer', image: require('../assets/professional1.jpg') },
    { id: '2', name: 'John Doe', profession: 'Event Planner', image: require('../assets/professional2.jpg') },
    { id: '3', name: 'Alice Johnson', profession: 'Makeup Artist', image: require('../assets/professional3.jpg') },
  ];

  const renderProfessionalItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.professionalItem}
      onPress={() => navigation.navigate('ProfessionalProfile', { professional: item })}
    >
      <Image source={item.image} style={styles.professionalImage} />
      <View style={styles.professionalInfo}>
        <Text style={styles.professionalName}>{item.name}</Text>
        <Text style={styles.profession}>{item.profession}</Text>
      </View>
      <TouchableOpacity style={styles.heartIcon}>
        <Icon name="heart" size={24} color="#FF3B30" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Professionals</Text>
      <FlatList
        data={savedProfessionals}
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
    color: '#333',
    marginBottom: 20,
  },
  professionalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  professionalImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  professionalInfo: {
    flex: 1,
    marginLeft: 15,
  },
  professionalName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  profession: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  heartIcon: {
    padding: 5,
  },
});

export default SavedProfessionalsScreen;