import { View, Text, ActivityIndicator, StyleSheet, FlatList, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Profile() {
  <View  style={styles.container}>
    <Text>Profile</Text>

  </View>
  ;
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

