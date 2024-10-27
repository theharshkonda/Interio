import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const LifestyleHubScreen = ({ navigation }) => {
  const articles = [
    { id: '1', title: '10 Tips for a Perfect Event', category: 'Event Planning', image: require('../assets/article1.jpg') },
    { id: '2', title: 'Web Design Trends 2024', category: 'Web Design', image: require('../assets/article2.jpg') },
    { id: '3', title: 'Makeup Techniques for Beginners', category: 'Beauty', image: require('../assets/article3.jpg') },
    // Add more articles
  ];

  const renderArticleItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.articleCard}
      onPress={() => navigation.navigate('Article', { article: item })}
    >
      <Image source={item.image} style={styles.articleImage} />
      <View style={styles.articleInfo}>
        <Text style={styles.articleCategory}>{item.category}</Text>
        <Text style={styles.articleTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lifestyle Hub</Text>
      <FlatList
        data={articles}
        renderItem={renderArticleItem}
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
  articleCard: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  articleImage: {
    width: '100%',
    height: 200,
  },
  articleInfo: {
    padding: 15,
  },
  articleCategory: {
    fontSize: 14,
    color: '#007AFF',
    marginBottom: 5,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default LifestyleHubScreen;