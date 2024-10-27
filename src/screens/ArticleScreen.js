import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const ArticleScreen = ({ route }) => {
  const { article } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={article.image} style={styles.coverImage} />
      <View style={styles.content}>
        <Text style={styles.category}>{article.category}</Text>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.articleContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
          Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus 
          rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna 
          non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut 
          dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit 
          odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec 
          congue lacinia dui, a porttitor lectus condimentum laoreet.
        </Text>
      </View>
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
    height: 250,
  },
  content: {
    padding: 20,
  },
  category: {
    fontSize: 16,
    color: '#007AFF',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  articleContent: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
});

export default ArticleScreen;
