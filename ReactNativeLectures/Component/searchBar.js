import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Surah"
        value={searchQuery}
        onChangeText={(text)=>setSearchQuery(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
});

export default SearchBar;