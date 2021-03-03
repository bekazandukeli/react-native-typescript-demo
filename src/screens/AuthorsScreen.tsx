import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import SearchIcon from '../assets/images/SearchIcon';
import AuthorItem from '../components/AuthorItem';
import SearchBar from '../components/SearchBar';
import Icon from 'react-native-vector-icons/Ionicons';
import {fetchUsersAPI} from '../api';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

interface PostsDataModel {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserDataModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  posts: Array<PostsDataModel>;
}

export default function AuthorsScreen({navigation}) {
  const [usersData, setUsersData] = useState<Array<UserDataModel>>(null);
  const width = useWindowDimensions().width;
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await fetchUsersAPI();
      setUsersData(data);
    };
    fetchUsers();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Authors</Text>
      </View>
      <SearchBar style={{marginBottom: 14}} />
      {usersData ? (
        <FlatList
          data={usersData}
          showsVerticalScrollIndicator={false}
          keyExtractor={(user) => user.id.toString()}
          renderItem={({item}) => (
            <Pressable
              style={({pressed}) => {
                if (Platform.OS === 'ios') {
                  return [{backgroundColor: pressed ? '#eee' : '#fff'}];
                }
              }}
              onPress={() => navigation.navigate('Posts', item)}
              android_ripple={{
                borderless: false,
                color: 'grey',
                radius: width,
              }}>
              <AuthorItem
                pressed={Platform.OS === 'ios' ? true : null}
                postNumber={item.posts.length}
                userEmail={item.email}
                userName={item.name}
              />
            </Pressable>
          )}
        />
      ) : (
        <View style={{flex: 1, paddingTop: width * 0.3}}>
          <ActivityIndicator
            size="large"
            color={Platform.OS === 'ios' ? 'gray' : '#159687'}
          />
        </View>
      )}
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
