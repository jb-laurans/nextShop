import { View, Text, ActivityIndicator, StyleSheet, FlatList, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Profdgfile() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=30d5b80f`);
      setMovies(response.data.Search || []);
    } catch (err) {
      setError('Failed to fetch movies');
    } finally {
      setLoading(false);
    }
  };

  const renderMovieItem = ({ item }) => (
    <View style={styles.movieItem}>
      <Text style={styles.movieTitle}>{item.Title}</Text>
      <Text>Year: {item.Year}</Text>
      <Text>Type: {item.Type}</Text>
    </View>
  );

  const handleSearch = () => {
    if (searchQuery) {
      fetchMovies(searchQuery);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter movie title"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="Search" onPress={handleSearch} />

      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.error}>{error}</Text>}

      <FlatList
        data={movies}
        keyExtractor={(item) => item.imdbID}
        renderItem={renderMovieItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: 'outfit',
    textAlign: 'center',
    marginTop: 50,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '80%',
  },
  error: {
    color: 'red',
    marginVertical: 10,
  },
  list: {
    paddingTop: 20,
  },
  movieItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
