import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const WalletScreen = () => {
  const transactions = [
    { id: '1', type: 'Payment', amount: -50, date: '2024-10-20', description: 'Web Design Service' },
    { id: '2', type: 'Refund', amount: 25, date: '2024-10-18', description: 'Cancelled Booking' },
    { id: '3', type: 'Payment', amount: -75, date: '2024-10-15', description: 'Event Planning Service' },
  ];

  const renderTransactionItem = ({ item }) => (
    <View style={styles.transactionItem}>
      <View style={styles.transactionInfo}>
        <Text style={styles.transactionType}>{item.type}</Text>
        <Text style={styles.transactionDescription}>{item.description}</Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
      </View>
      <Text style={[styles.transactionAmount, { color: item.amount > 0 ? '#4CD964' : '#FF3B30' }]}>
        ${Math.abs(item.amount).toFixed(2)}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.balanceCard}>
        <Text style={styles.balanceTitle}>Wallet Balance</Text>
        <Text style={styles.balanceAmount}>$250.00</Text>
        <TouchableOpacity style={styles.addFundsButton}>
          <Text style={styles.addFundsButtonText}>Add Funds</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.transactionsTitle}>Recent Transactions</Text>
      <FlatList
        data={transactions}
        renderItem={renderTransactionItem}
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
  balanceCard: {
    backgroundColor: '#007AFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  balanceTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  balanceAmount: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  addFundsButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
  addFundsButtonText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  transactionsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingVertical: 15,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  transactionDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  transactionDate: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WalletScreen;
