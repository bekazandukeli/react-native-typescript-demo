import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchIcon from '../assets/images/SearchIcon';
import AuthorItem from '../components/AuthorItem';
import SearchBar from '../components/SearchBar';

export default function AuthorsScreen() {
  return (
    <View style={styles.container}>
      <SearchBar style={{marginBottom: 14}} />
      <AuthorItem
        postNumber={5}
        userEmail="bekazandukeli@gmail.com"
        userName="Beka Zandukeli"
      />
      <AuthorItem
        postNumber={5}
        userEmail="bekazandukeli@gmail.com"
        userName="Beka Zandukeli"
      />
      <AuthorItem
        postNumber={5}
        userEmail="bekazandukeli@gmail.com"
        userName="Beka Zandukeli"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
