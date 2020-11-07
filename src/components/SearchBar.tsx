import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Text} from 'react-native-svg';
import SearchIcon from '../assets/images/SearchIcon';

export default function SearchBar({style = {}}) {
  return (
    <View style={style}>
      <View style={styles.container}>
        <View style={styles.searchIcon}>
          <SearchIcon color="#999" />
        </View>
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEEEE',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    borderRadius: 4,
  },
  searchInput: {
    flex: 1,
    marginRight: 8,
  },
  searchIcon: {
    width: 40,
    alignItems: 'center',
  },
});
