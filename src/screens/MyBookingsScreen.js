import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MyBookingsScreen = () => {
  const bookings = [
    { id: '1', service: 'Web Design', professional: 'Jane Smith', date: '2024-10-25', status: 'Upcoming' },
    { id: '2', service: 'Event Planning', professional: 'John Doe', date: '2024-10-22', status: 'Completed' },
    { id: '3', service: 'Makeup Session', professional: 'Alice Johnson', date: '2024-10-28', status: 'Upcoming' },
  ];

  const renderBookingItem = ({ item }) => (
    <View style={styles.bookingItem}>
      <View style={styles.bookingInfo}>
        <Text style={styles.serviceName}>{item.service}</Text>
        <Text style={styles.professionalName}>{item.professional}</Text>
        <Text style={styles.bookingDate}>{item.date}</Text>
      </View>
      <View style={[styles.statusBadge, { backgroundColor: item.status === 'Upcoming' ? '#007AFF' : '#4CD964' }]}>
        <Text style={styles.statusText}>{item.status}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Bookings</Text>
      <FlatList
        data={bookings}
        renderItem={renderBookingItem}
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
  bookingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  bookingInfo: {
    flex: 1,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  professionalName: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  bookingDate: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  statusText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MyBookingsScreen;