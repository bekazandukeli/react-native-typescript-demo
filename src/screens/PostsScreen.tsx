import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import PostItem from '../components/PostItem';
import SearchBar from '../components/SearchBar';
import {UserDataModel} from './AuthorsScreen';

export default function PostsScreen({route}) {
  const {name, posts}: UserDataModel = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{`${name}'s Posts`}</Text>
      </View>
      <SearchBar style={{marginBottom: 24}} />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Pressable>
            {({pressed}) => (
              <PostItem
                title={item.title}
                content={item.body}
                pressed={pressed}
              />
            )}
          </Pressable>
        )}
        ItemSeparatorComponent={() => <View style={{height: 24}} />}
        ListFooterComponent={() => <View style={{height: 24}} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    lineHeight: 24,
  },
  titleContainer: {
    height: 40,
    width: 280,
    marginLeft: 16,
    justifyContent: 'center',
    marginVertical: 12,
  },
});
