import React from 'react';
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import Arrow from '../assets/images/Arrow';

type AuthorItemProps = {
  userName: string;
  userEmail: string;
  postNumber: number;
};

export default function AuthorItem({
  userEmail,
  userName,
  postNumber,
}: AuthorItemProps) {
  return (
    <View style={style.container}>
      <View style={style.userInfoContainer}>
        <View style={style.iconBackground}>
          <Text style={style.iconText}>JS</Text>
        </View>
        <View style={style.userInfoWrapper}>
          <Text style={style.userName}>{userName}</Text>
          <Text style={style.userEmail}>{userEmail}</Text>
        </View>
      </View>
      <Pressable
        style={({pressed}) => [
          style.goToPostsWrapper,
          {opacity: pressed ? 0.5 : 1},
        ]}
        onPress={() => Alert.alert('rame')}>
        <Text style={[style.goToPostsText]}>{postNumber} posts</Text>
        <Arrow style={style.goToPostsArrow} />
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 'auto',
    height: 72,
    position: 'relative',
    paddingLeft: 16,
    paddingRight: 4,
    paddingVertical: 14,
    justifyContent: 'space-between',
  },
  iconBackground: {
    height: 40,
    width: 40,
    borderRadius: 99,
    backgroundColor: '#6FCF97',
    marginVertical: 2,
  },
  iconText: {
    fontSize: 14,
    lineHeight: 40,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
  },
  userInfoContainer: {
    padding: 0,
    flexDirection: 'row',
  },
  userInfoWrapper: {
    marginHorizontal: 16,
  },
  userName: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    lineHeight: 24,
  },
  userEmail: {
    fontSize: 12,
    color: '#382A2C',
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    lineHeight: 16,
    opacity: 0.54,
  },
  goToPostsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 18.59,
  },
  goToPostsText: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    lineHeight: 24,
    marginRight: 15,
  },
  goToPostsArrow: {
    position: 'relative',
    top: 1,
  },
});
