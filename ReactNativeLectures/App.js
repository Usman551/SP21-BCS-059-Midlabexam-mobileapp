import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { surahNames, surahDetails } from './src/data/QuranData';
import FileList from './Component/FileList';
import SearchBar from './Component/searchBar';

export default function App() {
  const [chatData, setChatData] = useState([]);
  const [surahDetail, setSurahDetail] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setChatData(surahNames);
    setSurahDetail(surahDetails);
  }, []);

  const filteredSurahNames = chatData.filter(surah =>
    surah.english && surah.english.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FileList surahNames={filteredSurahNames} surahDetails={surahDetails} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: 'black'
  },
});